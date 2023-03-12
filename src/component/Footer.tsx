import { faRss } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from '../styles/Footer.module.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className={style.box__footer}>
      <div className={style.box__brand}>
        <a href="https://github.com/gus-bms" target="_blank" rel="noreferrer"><FontAwesomeIcon className={style.brand__logo} icon={faGithub} size='5x' color='black' /></a>
        <a href="https://velog.io/@gusbms0627" target="_blank" rel="noreferrer"><FontAwesomeIcon className={style.brand__logo} icon={faRss} size='5x' color='black' /></a>
        <a href="https://www.instagram.com/gus_bms/" target="_blank" rel="noreferrer"><FontAwesomeIcon className={style.brand__logo} icon={faInstagram} size='5x' color='black' /></a>
      </div>
      <h1 className={style.copyright}>Copyright {year}. gus-bms all rights reserved. </h1>
    </div>
  )
}