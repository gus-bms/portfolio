import React, { useRef, useState } from 'react'
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from '../styles/Slider.module.scss'
import Modal from './ImgModal'

interface IProps {
  images: string[],
}
export default function Slider(props: IProps) {
  const [current, setCurrent] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');
  const imgRef = useRef<HTMLImageElement[] | null[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null)
  let isDragStart = false, prevPageX: number, prevScrollLeft: number;


  const dragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragStart = true
    prevPageX = e.pageX
    if (carouselRef.current)
      prevScrollLeft = carouselRef.current.scrollLeft;
  }

  const dragging = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragStart) return
    e.preventDefault();
    if (carouselRef.current != null) {
      carouselRef.current.scrollLeft = e.pageX
      let positionDiff = e.pageX - prevPageX;
      carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
    }

  }

  const dragStop = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragStart = false
  }

  return (
    <div className={style.container}>
      <div ref={carouselRef} className={style.box__slider}
        onMouseMove={dragging}
        onMouseDown={dragStart}
        onMouseUp={dragStop}
      >
        {props.images && props.images.map((img, idx) => (
          <img key={idx} ref={el => (imgRef.current[idx] = el)}
            src={`${process.env.PUBLIC_URL}/assets/projects/${img}.png`} alt='project' onClick={() => {
              setIsOpen(true)
              setUrl(`${process.env.PUBLIC_URL}/assets/projects/${img}.png`)
            }}
          />
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