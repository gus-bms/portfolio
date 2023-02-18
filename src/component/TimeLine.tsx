import { useRef } from "react";
import "./TimeLine.scss";
export default function TimeLine() {
  const pRef = useRef<HTMLParagraphElement[] | null[]>([])

  const handlePClick = (idx: number) => {
    pRef.current[idx]?.focus()
  };

  return (
    <>
      <div className="container">
        <div className="timeline">
          <div className="timeline_container primary">
            <div className="timeline_icon">
              <i className="fa-solid fa-globe"></i>
            </div>
            <div className="timeline_body">
              <h4 className="timeline_title"><span className="badge">구직 중</span> <span className="badge">2022.08 ~</span> </h4>

              <p>HTML/CSS JS Study</p>
              <p>React Study</p>
              <p>Next.js Study</p>
              <p>Toy Project Develop</p>
              <p>정보처리기사 취득</p>
              {/* <p className="timeline_subtitle"></p> */}
            </div>
          </div>
          <div className="timeline_container danger">
            <div className="timeline_icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <div className="timeline_body">
              <h4 className="timeline_title"><span className="badge">솔루션 엔지니어</span> <span className="badge">2020.08 ~</span> </h4>
              <p>실험실 관리 솔루션 고도화 개발 참여</p>
              <p>실험실 관리 솔루션 2건 납품 및 유지보수</p>
              <p>헬스케어 서비스 개발 및 고도화</p>
              <p>프로젝트 종료 후 보완점 캐치 후 고도화 제의 및 수행</p>
              <p>개발팀 가이드 문서 정책 수립</p>
              {/* <p className="timeline_subtitle">2 Hours Ago</p> */}
            </div>
          </div>
          <div className="timeline_container success">
            <div className="timeline_icon">
              <i className="fa-solid fa-bug-slash"></i>
            </div>
            <div className="timeline_body">
              <h4 className="timeline_title"><span className="badge">테스트 엔지니어</span><span className="badge">2019.05 ~</span></h4>
              <p>D그룹 전사 SAP ERP 및 레거시 시스템 테스트</p>
              <p>D그룹 MES 시스템 테스트 수행</p>
              <p>D그룹 AG 시스템 테스트 수행</p>
              <p>B사 MES 시스템 테스트 수행</p>
              {/* <p className="timeline_subtitle">6 Hours Ago</p> */}
            </div>
          </div>
          <div className="timeline_container warning">
            <div className="timeline_icon">
              <i className="fa-regular fa-id-card"></i>
            </div>
            <div className="timeline_body">
              <h4 className="timeline_title"><span className="badge">인턴</span><span className="badge">2019.02 ~</span></h4>
              <p>항공권 예약 시스템 과제 수행</p>
              {/* <p className="timeline_subtitle">1 Day Ago</p> */}
            </div>
          </div>
          <div className="timeline_container graduation">
            <div className="timeline_icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div className="timeline_body">
              <h4 className="timeline_title"><span className="badge">졸업</span><span className="badge"> ~ 2019.02</span></h4>
              <p>경영학과 / SAP ABAP 복수 전공 | 4.24 / 4.5</p>
              {/* <p className="timeline_subtitle">1 Day Ago</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
    //     <>
    //       <nav>
    //         <div className={style.nav__track} data-draggable>
    //           <ul className={style.nav__list}>
    //             <li>
    //               <div
    //                 tabIndex={0}
    //                 onClick={() => handlePClick(0)}
    //                 ref={(el) => (pRef.current[0] = el)}
    //                 className={style.nav__link}
    //                 data-link
    //               >
    //                 <span className={style.nav__period}>2019.02</span>
    //                 <span className={style.nav__title}>동양미래대학교 경영학과 졸업</span>
    //                 <div className={style.box__detail}>
    //                   <p className={style.nav__detail}>ABAP 언어 복수 전공</p>
    //                   <p className={style.nav__detail}>4.24 / 4.5 졸업</p>
    //                 </div>
    //               </div>
    //             </li>
    //             <li>
    //               <div
    //                 tabIndex={0}
    //                 onClick={() => handlePClick(1)}
    //                 ref={(el) => (pRef.current[1] = el)}
    //                 className={style.nav__link}
    //                 data-link
    //               >
    //                 <span className={style.nav__period}>2019.02</span>
    //                 <span className={style.nav__title}>(주)아이디에스앤트러스트 인턴</span>
    //                 <div className={style.box__detail}>
    //                   <p className={style.nav__detail}>ABAP 항공권 예매 프로그램 과제</p>
    //                   <p className={style.nav__detail}>인턴쉽 합격</p>
    //                 </div>
    //               </div>
    //             </li>
    //             <li>
    //               <div
    //                 tabIndex={0}
    //                 onClick={() => handlePClick(2)}
    //                 ref={(el) => (pRef.current[2] = el)}
    //                 className={style.nav__link}
    //                 data-link
    //               >
    //                 <span className={style.nav__period}>2019.05</span>
    //                 <span className={style.nav__title}>(주)바이오커넥트 테스트엔지니어 입사</span>
    //                 <div className={style.box__detail}>
    //                   <p className={style.nav__detail}>SAP ERP 테스트 수행</p>
    //                   <p className={style.nav__detail}>MES 시스템 테스트 수행</p>
    //                   <p className={style.nav__detail}>AG 시스템 테스트 수행</p>
    //                 </div>
    //               </div>
    //             </li>
    //             <li>
    //               <div
    //                 tabIndex={0}
    //                 onClick={() => handlePClick(3)}
    //                 ref={(el) => (pRef.current[3] = el)}
    //                 className={style.nav__link}
    //                 data-link
    //               >
    //                 <span className={style.nav__period}>2020.08</span>
    //                 <span className={style.nav__title}>(주)바이오커넥트 개발팀 전직</span>
    //                 <div className={style.box__detail}>
    //                   <p className={style.nav__detail}>실험실 관리 솔루션과 헬스케어 서비스 개발</p>
    //                   <p className={style.nav__detail}>2건의 프로젝트 납품 및 서비스 출시 경험</p>
    //                   <p className={style.nav__detail}>프로젝트 종료 후 보완점 캐치 후 고도화 진행</p>
    //                   <p className={style.nav__detail}>프로젝트/특정 서비스 이용 가이드 문서 작성</p>
    //                 </div>
    //               </div>
    //             </li>
    //             <li>
    //               <div
    //                 tabIndex={0}
    //                 onClick={() => handlePClick(4)}
    //                 ref={(el) => (pRef.current[4] = el)}
    //                 className={style.nav__link}
    //                 data-link
    //               >
    //                 <span className={style.nav__period}>현재</span>
    //                 <span className={style.nav__title}>구직 중</span>
    //                 <div className={style.box__detail}>
    //                   <p className={style.nav__detail}>React Study</p>
    //                   <p className={style.nav__detail}>HTML / CSS Study</p>
    //                   <p className={style.nav__detail}>정보처리기사 취득</p>
    //                 </div>
    //               </div>
    //             </li >
    //           </ul >
    //         </div >
    //       </nav >
    //     </>
  );
}
