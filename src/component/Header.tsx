import { useEffect, useRef } from 'react'
import style from '../styles/Header.module.scss'

export default function Header() {
  const pbRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    window.onscroll = function () {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      if (pbRef.current)
        pbRef.current.style.width = scrolled + "%";
    }
  }, [])

  return (
    <>
      <div className={style.box__header}>
        <h1 onClick={handleLogo} className={style.logo}>Gus-Bms</h1>
        <div className={style.box__menu} style={{ marginLeft: 'auto', display: 'flex' }}>
          <h2 onClick={() => moveAnchor('career')}>career</h2>
          <h2 onClick={() => moveAnchor('projects')} >projects</h2>
          <h2 >certi</h2>
        </div>
      </div>
      <div className={style.progress__container}>
        <div ref={pbRef} className={style.progress__bar}></div>
      </div>
    </>
  )
}
