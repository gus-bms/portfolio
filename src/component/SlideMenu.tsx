import { faBars, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import style from '../styles/Menu.module.scss'

export default function SliderMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
    console.log(isOpen)
  }, [isOpen])

  return (
    <div className={[style.container, isOpen ? style.open : style.close].join(' ')}>
      <div className={style.logo}>
        Gusbms
      </div>
      <div className={style.menubutton} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon className={style.icon__menu} icon={isOpen ? faMinus : faBars} color='black' size='2x' />
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
          <h2 >certi</h2>
        </div>
      </div>
    </div>
  )
}
