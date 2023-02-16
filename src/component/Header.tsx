import { useEffect, useRef, useState } from 'react'
import { faBars, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from '../styles/Header.module.scss'

export default function Header() {
  const pbRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  const [isToggle, setIsToggle] = useState<boolean>(false)
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

  const resizeListener = (e: any) => {
    if (e.target.visualViewport.width > 961) setIsToggle(false)
  };

  useEffect(() => {
    window.onscroll = function () {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      if (pbRef.current)
        pbRef.current.style.width = scrolled + "%";
    }

    window.addEventListener("resize", resizeListener);

  }, [])

  useEffect(() => {
    console.log(isToggle)
    if (isToggle) {
      menuRef.current?.classList.add(style.active)
      return
    }
    menuRef.current?.classList.remove(style.active)

  }, [isToggle])

  return (
    <>
      <div className={style.box__header}>
        <h1 onClick={handleLogo} className={style.logo}>Gus-Bms</h1>
        <div className={style.box__menu} >
          <FontAwesomeIcon icon={!isToggle ? faBars : faMinus} color='black' size='2x' onClick={() => setIsToggle(!isToggle)} />
          <div ref={menuRef} >
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
            <h2 >certi</h2>
          </div>
        </div>
        <div className={style.progress__container}>
          <div ref={pbRef} className={style.progress__bar}></div>
        </div>
      </div>
    </>
  )
}