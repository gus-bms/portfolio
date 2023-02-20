import { faBars, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from 'react';
import style from '../styles/Menu.module.scss'

export default function SliderMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLight, setIsLight] = useState<boolean>(true)
  const switchRef = useRef<HTMLInputElement | null>(null)

  const moveAnchor = (target: string) => {
    const headerY = window.innerHeight * 0.1;
    let locateY;
    let el = document.getElementById(target);
    if (el != null) {
      locateY = window.scrollY + el?.getBoundingClientRect().top - headerY
      window.scrollTo({ top: locateY, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (switchRef.current) {
      isOpen ? switchRef.current.style.opacity = '1' : switchRef.current.style.opacity = '0'
    }

  }, [isOpen])

  useEffect(() => {
    console.log(isLight)
    isLight ? document.documentElement.setAttribute("data-theme", "light") : document.documentElement.setAttribute("data-theme", "dark");
  }, [isLight])

  return (
    <div className={[style.container, isOpen ? style.open : style.close].join(' ')}>
      <div className={style.logo}>
        Gusbms
      </div>
      <div className={style.menubutton} >
        <div ref={switchRef} className={style.check__box}>
          <input type="checkbox" onClick={() => setIsLight(!isLight)} />
        </div>
        <FontAwesomeIcon className={style.icon__menu} icon={isOpen ? faMinus : faBars} color='black' size='2x' onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className={style.wrapper__side} onClick={() => setIsOpen(!isOpen)}>
        <div className={style.sidenav}>
          <h2 onClick={() => {
            moveAnchor('history')
          }
          }>history</h2>
          <h2 onClick={() => {
            moveAnchor('projects')
          }
          }>projects</h2>
          {/* <h2 >certi</h2> */}
        </div>
      </div>
    </div>
  )
}
