import { useRef } from "react";
import style from "../styles/TimeLine.module.scss";
export default function TimeLine() {
  const pRef = useRef<HTMLParagraphElement[] | null[]>([])

  const handlePClick = (idx: number) => {
    pRef.current[idx]?.focus()
  };

  return (
    <>
      <nav>
        <div className={style.nav__track} data-draggable>
          <ul className={style.nav__list}>
            <li>
              <div
                tabIndex={0}
                onClick={() => handlePClick(0)}
                ref={(el) => (pRef.current[0] = el)}
                className={style.nav__link}
                data-link
              >
                <span className={style.nav__period}>2019.02</span>
                <span className={style.nav__title}>동양미래대학교 경영학과 졸업</span>
                <div className={style.box__detail}>
                  <p className={style.nav__detail}>ABAP 언어 복수 전공</p>
                  <p className={style.nav__detail}>4.24 / 4.5 졸업</p>
                </div>
              </div>
            </li>
            <li>
              <div
                tabIndex={0}
                onClick={() => handlePClick(1)}
                ref={(el) => (pRef.current[1] = el)}
                className={style.nav__link}
                data-link
              >
                <span className={style.nav__period}>2019.02</span>
                <span className={style.nav__title}>(주)아이디에스앤트러스트 인턴</span>
                <div className={style.box__detail}>
                  <p className={style.nav__detail}>ABAP 항공권 예매 프로그램 과제</p>
                  <p className={style.nav__detail}>인턴쉽 합격</p>
                </div>
              </div>
            </li>
            <li>
              <div
                tabIndex={0}
                onClick={() => handlePClick(2)}
                ref={(el) => (pRef.current[2] = el)}
                className={style.nav__link}
                data-link
              >
                <span className={style.nav__period}>2019.05</span>
                <span className={style.nav__title}>(주)바이오커넥트 테스트엔지니어 입사</span>
                <div className={style.box__detail}>
                  <p className={style.nav__detail}>SAP ERP 테스트 수행</p>
                  <p className={style.nav__detail}>MES 시스템 테스트 수행</p>
                  <p className={style.nav__detail}>AG 시스템 테스트 수행</p>
                </div>
              </div>
            </li>
            <li>
              <div
                tabIndex={0}
                onClick={() => handlePClick(3)}
                ref={(el) => (pRef.current[3] = el)}
                className={style.nav__link}
                data-link
              >
                <span className={style.nav__period}>2020.08</span>
                <span className={style.nav__title}>(주)바이오커넥트 개발팀 전직</span>
                <div className={style.box__detail}>
                  <p className={style.nav__detail}>실험실 관리 솔루션과 헬스케어 서비스 개발</p>
                  <p className={style.nav__detail}>2건의 프로젝트 납품 및 서비스 출시 경험</p>
                  <p className={style.nav__detail}>프로젝트 종료 후 보완점 캐치 후 고도화 진행</p>
                  <p className={style.nav__detail}>프로젝트/특정 서비스 이용 가이드 문서 작성</p>
                </div>
              </div>
            </li>
            <li>
              <div
                tabIndex={0}
                onClick={() => handlePClick(4)}
                ref={(el) => (pRef.current[4] = el)}
                className={style.nav__link}
                data-link
              >
                <span className={style.nav__period}>현재</span>
                <span className={style.nav__title}>구직 중</span>
                <div className={style.box__detail}>
                  <p className={style.nav__detail}>React Study</p>
                  <p className={style.nav__detail}>HTML / CSS Study</p>
                  <p className={style.nav__detail}>정보처리기사 취득</p>
                </div>
              </div>
            </li >
          </ul >
        </div >
      </nav >
    </>
  );
}
