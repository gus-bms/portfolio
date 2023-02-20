import { useEffect, useRef, useState } from 'react'
import { faBars, faMinus, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SliderMenu from './SlideMenu';
import style from '../styles/Header.module.scss'

export default function Header() {
  const pbRef = useRef<HTMLDivElement | null>(null);
  const switchRef = useRef<HTMLInputElement | null>(null)
  const [isToggle, setIsToggle] = useState<boolean>(false)
  const [isLight, setIsLight] = useState<boolean>(document.documentElement.getAttribute("data-theme") === 'light' ? true : false)
  const [isMobile, setIsMobile] = useState<boolean>(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  const menuRef = useRef<HTMLDivElement | null>(null)
  const handleLogo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const moveAnchor = (target: string) => {
    const headerY = window.innerHeight * 0.1;
    let locateY;
    let el = document.getElementById(target);
    if (el != null) {
      locateY = window.scrollY + el?.getBoundingClientRect().top - headerY
      window.scrollTo({ top: locateY, behavior: 'smooth' })
    }
  }

  const resizeHandler = (e: any) => {
    e.target.visualViewport.width < 961 ? setIsMobile(true) : setIsMobile(false)
    document.documentElement.getAttribute("data-theme") === 'light' ? setIsLight(true) : setIsLight(false)
  };

  const scrollHandler = (e: any) => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    if (pbRef.current)
      pbRef.current.style.width = scrolled + "%";
  };

  useEffect(() => {
    window.innerWidth < 961 ? setIsMobile(true) : setIsMobile(false)

    window.addEventListener("resize", resizeHandler);
    window.addEventListener("scroll", scrollHandler);
    document.documentElement.getAttribute("data-theme") === 'light' ? setIsLight(true) : setIsLight(false)
  }, [])

  useEffect(() => {
    console.log(isLight)
    isLight === true ? document.documentElement.setAttribute("data-theme", "light") : document.documentElement.setAttribute("data-theme", "dark")
  }, [isLight])

  return (
    <>
      {isMobile ? <SliderMenu /> :
        <div className={style.box__header}>
          <h1 onClick={handleLogo} className={style.logo}>Gusbms</h1>
          <div className={style.box__menu} >
            {/* <FontAwesomeIcon icon={!isToggle ? faBars : faMinus} color='black' size='2x' onClick={() => setIsToggle(!isToggle)} /> */}
            <div ref={menuRef} >
              <div className={style.check__box} style={{
                marginTop: '5px',
                marginRight: '19px'
              }}>
                <input checked={isLight ? false : true} readOnly={true} ref={switchRef} type="checkbox" onChange={() => setIsLight(!isLight)} />
              </div>
              <h2 onClick={() => {
                setIsToggle(false)
                moveAnchor('history')
              }
              }>history</h2>
              <h2 onClick={() => {
                setIsToggle(false)
                moveAnchor('projects')
              }
              }>projects</h2>
              {/* <h2 >certi</h2> */}
            </div>
          </div>

        </div>
      }
      <div className={style.progress__container}>
        <div ref={pbRef} className={style.progress__bar}></div>
      </div>
    </>
  )
}
