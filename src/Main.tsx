import { useEffect, useRef } from 'react';
import style from './styles/Main.module.scss'
import { faAngleDown, faEnvelope, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TypeButton from './component/TypeButton';
import TimeLine from './component/TimeLine';

export default function Main() {
  const topRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    window.onscroll = function () {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (topRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        winScroll < 600
          ? (
            topRef.current.style.visibility = 'hidden',
            topRef.current.style.opacity = '0',
            topRef.current.style.bottom = '-50px'
          )
          : (
            topRef.current.style.visibility = 'visible',
            topRef.current.style.opacity = '1',
            topRef.current.style.bottom = '50px'
          )
      }

    }
  }, [])

  return (
    <div className={style.main}>
      {/* profile 영역 */}
      <div className={style.box__profile}>
        <img className={style.box__img} src={'/assets/profile.jpg'} alt={''}>
        </img>
        <div className={style.text__intro}>
          <h2>안녕하세요, 주니어 웹 개발자 박규범입니다.</h2>
          <h2>새로운 도전을 두려워하지 않으며 기회로 받아들이는 타입입니다.</h2>
          <h2>배움을 기록하기 위한 습관을 기르고 있습니다.</h2>
        </div>
        <div className={style.text__contact}>
          <FontAwesomeIcon icon={faEnvelope} size='2x' color='white' />
          <h2>gusbms0627@gmail.com</h2>
        </div>
        <FontAwesomeIcon icon={faAngleDown} size='2x' color='white' className={style.animate__bounce} />
      </div>
      {/* 경력 영역 */}
      <article id='history' className={style.box__work}>
        <h1>History.</h1>
        <TimeLine />
      </article>
      {/* 프로젝트 영역 */}
      <article id='projects' className={style.box__project}>
        <h1>Projects.</h1>
        <div>
          <div>
            <h2 className={style.project__title}>Find Photo.</h2>
            <h2 className={style.project__period}>2023.01 ~ 2023.02 </h2>
            <TypeButton name='개인' type='P' />
            <TypeButton name='Link' type='L' url='https://github.com/gus-bms/find_photo/' />
          </div>
          {/* <h2 className={style.project__url}>https://find-photo.vercel.app</h2> */}
          <p className={style.project__intro}>여행을 다니며 사진을 남기고 추억을 공유하기를 좋아했습니다. 이 추억을 친구들에게 이야기하며 나누는 것을 좋아하는 저의 취미를 서비스로 만들어보고자 했습니다.</p>
          <p className={style.project__intro}>공유하고 싶은 식당이나 카페뿐만 아니라 장소를 등록하고 사진을 첨부하는 로그를 남깁니다. 동을 검색하면 해당 동에 등록된 장소와 남겨진 로그를 확인할 수 있습니다</p>
          <p className={style.project__intro}>첫 번째 사이드 프로젝트입니다. SEO에 대한 조건을 충족시켜 사용자들에게 노출 시키고 싶어  Next.js를 사용하였습니다.</p>
          <p className={style.project__intro}>타입스크립트를 활용하여 런타임에서 발생할 수 있는 타입관련 오류를 제한시켰습니다.</p>
          <p className={style.project__intro}>카카오로그인, 네이버로그인을 활용하여 간편한 SSO를 구현하였습니다.</p>
          <p className={style.project__intro}>써드파티에서 제공된 토큰을 활용하여 회원정보를 DB에 저장하고, JWT를 활용하여 1주일간 자동로그인이 가능하게 구현하였습니다.</p>
          <p className={style.project__intro}>AWS S3에 사용자가 등록한 이미지를 저장하였습니다.</p>
          <p className={style.project__intro}>인피니티 캐로셀 슬라이드, 로딩 스피너, 토스트 팝업 등 라이브러리를 사용하지 않고 바닐라 스크립트로 구현하였습니다.</p>
        </div>
        <div>
          <div>
            <h2 className={style.project__title}>글루닥</h2>
            <TypeButton name='회사' type='C' />
            <TypeButton name='Link' type='L' url='http://gludoc.com/' />
          </div>
          <p className={style.project__intro}>만성질환을 겪고 있는 환자분들의 기록을 쉽게 기록할 수 있게 도움을 주는 서비스입니다. </p>
          <p className={style.project__intro}>카메라로 혈당계, 혈압계, 체중계, 체온계 등의 기록을 쉽게 할 수 있으며, 채팅 서비스를 통해 의료진의 코칭을 받을 수 있습니다. </p>
          <p className={style.project__intro}>의료진은 웹을 통해 환자가 기록한 건강 데이터 추이를 확인할 수 있습니다. 또한 건강에 도움을 줄 수 있는 컨텐츠를 제공합니다. </p>
          <p className={style.project__intro}>Jenkins를 활용하여 배포 파이프라인을 구성하였습니다. </p>
          <p className={style.project__intro}> 파이어베이스의 리얼타임데이터베이스 서비스를 활용하여 채팅서비스를 구현하였습니다.</p>
          <p className={style.project__intro}>chart.js와 tui grid를 활용하여 차트와 그리드 UI를 구현하였습니다.</p>
          <p className={style.project__intro}>AWS S3를 활용하여 이미지를 저장시켰습니다. </p>
          <p className={style.project__intro}>AWS VPC를 활용하여 보안을 강화시켰습니다. </p>
          <p className={style.project__intro}>카카오, 네이버, 애플, 구글로그인을 활용하여 간편한 SSO를 구현하였습니다. </p>
          {/* <h2 className={style.project__url}>http://gludoc.com</h2> */}
        </div>
        <div>
          <div>
            <h2 className={style.project__title}>iLAB Solution</h2>
            <TypeButton name='회사' type='C' />
            <TypeButton name='Link' type='L' url='https://www.bioconnect.co.kr/lims' />
          </div>
          <p className={style.project__intro}>실험실에서 실험기기를 통해 발생하는 레포트를 서버에 전송시켜 통합적 관리를 할 수 있는 시스템을 개발하였습니다.</p>
          <p className={style.project__intro}>실험실에서 관리하는 전반적인 기기, 시약 등을 관리하고 실험 데이터와 프로세스를 전산화하여 성적서를 발행하는 시스템을 개발하였습니다.</p>
          <p className={style.project__intro}>chart.js와 tui grid를 활용하여 차트와 그리드 UI를 구현하였습니다.</p>
          <p className={style.project__intro}>세션을 활용하여 로그인 정보를 관리하였습니다.</p>
          <p className={style.project__intro}>시험 프로세스에 따른 결재시스템을 개발하였습니다.</p>
          <p className={style.project__intro}> 지브라 바코드 프린터와 연동하여 라벨 관리시스템을 개발하였습니다. </p>
          <p className={style.project__intro}> 프로젝트 납품 클라이언트와 소통하여 필요한 기능들을 추가 개발하였습니다. </p>
        </div>
      </article>
      <button ref={topRef} className={style.btn__top} onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}>
        <FontAwesomeIcon icon={faAnglesUp} size='2x' color='black' />
        <span>Top</span>
      </button>
      {/*       
      <div className={style.box_skill}>
        <h1>Skills.</h1>
      </div> */}
      {/* <article className={style.box__contact}> */}
      {/* <h1>Contact.</h1> */}

      {/* </article> */}
    </div >
  )
}