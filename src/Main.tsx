import style from './styles/Main.module.scss'
import { faAngleDown, faLink } from "@fortawesome/free-solid-svg-icons";
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
        <div>
          <h2 className={style.resume__company}>(주)바이오커넥트</h2>
          <h2 className={style.resume__period}>2020.08 ~ 2022.07</h2>
          <h2 className={style.resume__rank}>R&D Center | 주임</h2>
        </div>

        <h2 className={style.resume__result}>실험실 관리 솔루션과 헬스케어 서비스 개발</h2>
        <h2 className={style.resume__result}>2건의 프로젝트 납품 및 서비스 출시 경험</h2>
        <h2 className={style.resume__result}>프로젝트 종료 후 보완점 캐치 후 고도화 진행</h2>
        <h2 className={style.resume__result}>프로젝트/특정 서비스 이용 가이드 문서 작성</h2>
      </div>

      <div className={style.box__project}>
        <h1>Projects.</h1>
        <div>
          <h2 className={style.project__title}>Find Photo.</h2>
          <h3 className={style.project__period}>2022.12 ~ 2022.02 <br /> 개인 프로젝트</h3>
          {/* <h2 className={style.project__url}>https://find-photo.vercel.app</h2> */}
          <p className={style.project__intro}>
            여행을 다니며 사진을 남기고 추억을 공유하기를 좋아했습니다. 이 추억을 친구들에게 이야기하며 나누는 것을 좋아하는 저의 취미를 서비스로 만들어보고자 했습니다. <br />
            공유하고 싶은 식당이나 카페뿐만 아니라 장소를 등록하고 사진을 첨부하는 로그를 남깁니다. 동을 검색하면 해당 동에 등록된 장소와 남겨진 로그를 확인할 수 있습니다</p>
          <p className={style.project__skill}>
            첫 번째 사이드 프로젝트입니다. SEO에 대한 조건을 충족시켜 사용자들에게 노출 시키고 싶어  Next.js를 사용하였습니다.<br />
            타입스크립트를 활용하여 런타임에서 발생할 수 있는 타입관련 오류를 제한시켰습니다. <br />
            카카오로그인, 네이버로그인을 활용하여 간편한 SSO를 구현하였습니다. <br />
            써드파티에서 제공된 토큰을 활용하여 회원정보를 DB에 저장하고, JWT를 활용하여 1주일간 자동로그인이 가능하게 구현하였습니다.<br />
            AWS S3에 사용자가 등록한 이미지를 저장하였습니다.<br />
            인피니티 캐로셀 슬라이드, 로딩 스피너, 토스트 팝업 등 라이브러리를 사용하지 않고 바닐라 스크립트로 구현하였습니다.
          </p>
        </div>
        <div>
          <h2 className={style.project__title}>글루닥</h2>
          <p className={style.project__intro}>
            만성질환을 겪고 있는 환자분들의 기록을 쉽게 기록할 수 있게 도움을 주는 서비스입니다. <br />
            카메라로 혈당계, 혈압계, 체중계, 체온계 등의 기록을 쉽게 할 수 있으며, 채팅 서비스를 통해 의료진의 코칭을 받을 수 있습니다. <br />
            의료진은 웹을 통해 환자가 기록한 건강 데이터 추이를 확인할 수 있습니다. 또한 건강에 도움을 줄 수 있는 컨텐츠를 제공합니다.
          </p>
          <p className={style.project__skill}>
            Jenkins를 활용하여 배포 파이프라인을 구성하였습니다. <br />
            파이어베이스의 리얼타임데이터베이스 서비스를 활용하여 채팅서비스를 구현하였습니다.<br />
            chart.js와 tui grid를 활용하여 차트와 그리드 UI를 구현하였습니다.<br />
            AWS S3를 활용하여 이미지를 저장시켰습니다. <br />
            AWS VPC를 활용하여 보안을 강화시켰습니다. <br />
            카카오, 네이버, 애플, 구글로그인을 활용하여 간편한 SSO를 구현하였습니다. <br />
          </p>
          {/* <h2 className={style.project__url}>http://gludoc.com</h2> */}
        </div>
        <div>
          <h2 className={style.project__title}>iLAB Solution</h2>
          <p className={style.project__intro}>
            제약/바이오 실험실에서 실험기기를 통해 발생하는 레포트를 서버에 전송시켜 통합적 관리를 할 수 있는 시스템과, <br />
            실험실에서 관리하는 전반적인 기기, 시약 등을 관리하고 실험 데이터와 프로세스를 전산화하여 성적서를 발행하는 시스템입니다. <br />
          </p>
          <p className={style.project__skill}>
            chart.js와 tui grid를 활용하여 차트와 그리드 UI를 구현하였습니다.<br />
            세션을 활용하여 로그인 정보를 관리하였습니다.<br />
            시험 프로세스에 따른 결재시스템을 개발하였습니다.<br />
            지브라 바코드 시스템과 연동하여 라벨 관리시스템을 개발하였습니다. <br />
            프로젝트 납품 클라이언트와 소통하여 필요한 기능들을 추가 개발하였습니다. <br />
          </p>
        </div>
      </div>

      <div className={style.box_skill}>
        <h1>Skills.</h1>
      </div>
      <div className={style.box__contact}>
        <h1>Contact.</h1>
      </div>
    </div >
  )
}