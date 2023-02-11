import style from "../styles/TimeLine.module.scss";
export default function TimeLine() {
  return (
    <>
      <nav>
        <div className={style.nav__track} data-draggable>
          <ul className={style.nav__list}>
            <li>
              <p className={style.nav__link} data-link>
                <span className={style.nav__period}>2019.02</span>
                <span>동양미래대학교 경영학과 </span>
              </p>
            </li>
            <li>
              <p className={style.nav__link} data-link>
                <span className={style.nav__period}>2019.02</span>
                <span>(주)아이디에스앤트러스트 인턴</span>
              </p>
            </li>
            <li>
              <p className={style.nav__link} data-link>
                <span className={style.nav__period}>2019.05</span>
                <span>(주)바이오커넥트 테스트엔지니어 입사</span>
              </p>
            </li>
            <li>
              <p className={style.nav__link} data-link>
                <span className={style.nav__period}>2020.08</span>
                <span>(주)바이오커넥트 개발팀 전직</span>
              </p>
            </li>
            <li>
              <p className={style.nav__link} data-link>
                <span className={style.nav__period}>2022.08 ~</span>
                <span>현재</span>
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
