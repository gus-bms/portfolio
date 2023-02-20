import React, { useRef, useState } from 'react'
import { faAngleLeft, faAngleRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from '../styles/Slider.module.scss'
import Modal from './ImgModal'
import TypeButton from './TypeButton';

interface IProps {
  images: string[],
}
export default function Slider(props: IProps) {
  const [current, setCurrent] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');
  const imgRef = useRef<HTMLImageElement[] | null[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null)
  let isDragStart = false, prevPageX: number, prevScrollLeft: number, positionDiff: number;

  const onStart = (event: React.TouchEvent | React.MouseEvent) => {
    event.persist();
    console.log('event ', event);
    if (event.nativeEvent instanceof TouchEvent) {
      console.log(event.nativeEvent.touches);
    }

    if (event.nativeEvent instanceof MouseEvent) {
      console.log(event.nativeEvent.screenX);
    }
  };

  const dragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {

    isDragStart = true

    if (e.nativeEvent instanceof TouchEvent) {
      prevPageX = e.nativeEvent.touches[0].pageX
    } else if (e.nativeEvent instanceof MouseEvent) {
      prevPageX = e.nativeEvent.pageX
    }

    if (carouselRef.current)
      prevScrollLeft = carouselRef.current.scrollLeft;

  }

  const dragging = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragStart) return
    e.preventDefault();
    if (carouselRef.current != null) {

      if (e.nativeEvent instanceof TouchEvent) {
        carouselRef.current.scrollLeft = e.nativeEvent.touches[0].pageX
        positionDiff = e.nativeEvent.touches[0].pageX - prevPageX;
      } else if (e.nativeEvent instanceof MouseEvent) {
        carouselRef.current.scrollLeft = e.nativeEvent.pageX
        positionDiff = e.nativeEvent.pageX - prevPageX;
      }

      // carouselRef.current.scrollLeft = e.pageX
      // positionDiff = e.pageX - prevPageX;

      carouselRef.current.scrollLeft = prevScrollLeft - positionDiff

    }
  }

  const dragStop = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragStart) return
    isDragStart = false
    autoSlide();
  }

  const autoSlide = () => {
    console.log()
    if (carouselRef.current) {
      if (carouselRef.current.scrollLeft - (carouselRef.current.scrollWidth - carouselRef.current.clientWidth) > -1 || carouselRef.current.scrollLeft <= 0) return;
      let firstImg = carouselRef.current?.querySelectorAll("img")[0]
      positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
      let firstImgWidth = firstImg.clientWidth;
      // getting difference value that needs to add or reduce from carousel left to take middle img center
      let valDifference = firstImgWidth - positionDiff;
      console.log(valDifference)
      if (Number.isNaN(valDifference)) return
      if (carouselRef.current.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carouselRef.current.scrollLeft += positionDiff > firstImgWidth / 3
          ? (
            setCurrent(x => x + 1),
            valDifference
          )
          : -positionDiff;
      } else if (carouselRef.current.scrollLeft === prevScrollLeft) return
      return carouselRef.current.scrollLeft -= positionDiff > firstImgWidth / 3
        ? (
          setCurrent(x => x - 1),
          valDifference
        )
        : -positionDiff;

    }
  }

  return (
    <div className={style.container}>
      <div className={style.box__slider} ref={carouselRef}
        onMouseDown={dragStart}
        onTouchStart={dragStart}

        onMouseMove={dragging}
        onTouchMove={dragging}

        onMouseUp={dragStop}
        onTouchEnd={dragStop}
        onMouseLeave={dragStop}
      >
        {props.images && props.images.map((img, idx) => (
          <div key={idx} className={style.box__img}>
            <img ref={el => (imgRef.current[idx] = el)}
              src={`${process.env.PUBLIC_URL}/assets/projects/${img}.png`} alt='project' onClick={() => {
                setIsOpen(true)
                setUrl(`${process.env.PUBLIC_URL}/assets/projects/${img}.png`)
              }}
            />
            <TypeButton type='I' name={'zoom'} style={{
              bottom: '5px',
              position: 'absolute',
              left: '50%',
              transform: 'translate(calc(-50% - 18px))',
              zIndex: 1,
              cursor: 'pointer',
              width: '90px'
            }} onClick={() => {
              setIsOpen(true)
              setUrl(`${process.env.PUBLIC_URL}/assets/projects/${img}.png`)
            }} icon={faMagnifyingGlass} />
          </div>
        ))}
      </div>
      <FontAwesomeIcon id='left' className={style.button__left} icon={faAngleLeft} size='1x' color='black' />
      <FontAwesomeIcon id='right' className={style.button__right} icon={faAngleRight} size='1x' color='black' />
      {isOpen && <Modal url={url} setIsOpen={setIsOpen} isOpen={isOpen} />}
      <div className={style.box__locate}>
        {current + ' / ' + props.images.length}
      </div>
    </div>
  )
}