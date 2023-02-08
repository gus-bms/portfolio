import style from './styles/Main.module.scss'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Main() {
  const classNameJoin = (className: string) => {

  }
  return (
    <div className={style.main}>
      {/* profile 영역 */}
      <div className={style.box__profile}>
        <img className={style.box__img} src={'/assets/profile.jpg'} alt={''}>
        </img>
        <div className={style.text__intro}>
          <h2>안녕하세요, 주니어 개발자 박규범입니다.</h2>
        </div>
        <FontAwesomeIcon icon={faAngleDown} size='2x' color='white' className={style.animate__bounce} />
      </div>
      {/* 스킬 영역 */}
      <div className={style.box__work}>
        <h1>Work at.</h1>
      </div>
      <div className={style.box_skill}>
        <h1>Skills.</h1>
      </div>
      <div className={style.box__project}>
        <h1>Projects.</h1>
      </div>
      <div className={style.box__contact}>
        <h1>Contact.</h1>
      </div>
    </div >
  )
}