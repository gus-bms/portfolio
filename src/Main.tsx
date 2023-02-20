import { useEffect, useRef, useState } from 'react';
import style from './styles/Main.module.scss'
import { faAngleDown, faEnvelope, faAnglesUp, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TypeButton from './component/TypeButton';
import TimeLine from './component/TimeLine';
import Slider from './component/Slider';

export default function Main() {
  const topRef = useRef<HTMLDivElement | null>(null)
  const dayRef = useRef<SVGSVGElement | null>(null)
  const nightRef = useRef<SVGSVGElement | null>(null)
  const [isDaymode, setIsDayMode] = useState<boolean>(true) //true : day false: night

  const findPhotoImgs = ['find_photo1', 'find_photo2', 'find_photo3', 'find_photo4']
  const portFolioImgs = ['portfolio_1', 'portfolio_2', 'portfolio_1']
  const gludocMobileImgs = ['gludoc_mobile_1', 'gludoc_mobile_2', 'gludoc_mobile_3', 'gludoc_mobile_4', 'gludoc_mobile_5', 'gludoc_mobile_6', 'gludoc_mobile_7']

  useEffect(() => {
    if (dayRef.current && nightRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      isDaymode
        ? (
          document.documentElement.setAttribute("data-theme", "light"),
          dayRef.current.style.opacity = '1',
          dayRef.current.style.visibility = 'visible',
          dayRef.current.style.marginLeft = '0',

          nightRef.current.style.opacity = '0',
          nightRef.current.style.visibility = 'hidden',
          nightRef.current.style.marginLeft = '-150px',
          nightRef.current.style.transform = 'translate(0, 0)'
        ) : (
          document.documentElement.setAttribute("data-theme", "dark"),
          nightRef.current.style.opacity = '1',
          nightRef.current.style.visibility = 'visible',
          nightRef.current.style.marginLeft = '0',
          nightRef.current.style.paddingBottom = '155px',
          nightRef.current.style.transform = 'translate(0, -30%)',

          dayRef.current.style.opacity = '0',
          dayRef.current.style.visibility = 'hidden',
          dayRef.current.style.marginLeft = '-150px'
        )
    }

  }, [isDaymode])
  useEffect(() => {
    window.onscroll = function () {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
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
        <img className={style.box__img} src={`${process.env.PUBLIC_URL}/assets/profile.jpg`} alt={''}>
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
          <div className={style.box__title}>
            <h2 className={style.project__title}>Portfolio</h2>
            <h2 className={style.project__period}>23.02</h2>
            <TypeButton name='#개인' type='P' />
            <TypeButton name='Link' type='L' url='https://github.com/gus-bms/find_photo/' />
          </div>
          <div className={style.project__detail}>
            <div className={style.box__slider}>
              <Slider images={portFolioImgs} />
            </div>
            <div className={style.box__intro}>
              <div className={style.intro}>
                <p>제가 어떤 개발자인가에 대하여 어필하기 위하여 개발한 포트폴리오 사이트입니다. </p>
                <p>애니메이션과 css를 활용하여 재밌는 페이지를 만들고자 했습니다.</p>
                <p>앞으로도 추가적으로 개발된 프로젝트를 업데이트 할 예정입니다.</p>
              </div>
              <div className={style.skill}>
                {/* <span>skill</span> */}
                <p>Front-End: &nbsp;
                  <TypeButton name='react.js' type='S' />
                  <TypeButton name='typescript' type='S' />
                </p>
                <p>Deployment: &nbsp;
                  <TypeButton name='github pages' type='S' />
                </p>
                <p>Library: &nbsp;
                  <TypeButton name='node-sass' type='S' />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={style.box__title}>
            <h2 className={style.project__title}>Find Photo</h2>
            <h2 className={style.project__period}>23.01 </h2>
            <TypeButton name='#개인' type='P' />
            <TypeButton name='Link' type='L' url='https://github.com/gus-bms/find_photo/' />
          </div>
          <div className={style.project__detail}>
            <div className={style.box__slider}>
              <Slider images={findPhotoImgs} />
            </div>
            <div className={style.box__intro}>
              <div className={style.intro}>
                <p>여행을 다니며 쌓인 추억을 친구들에게 이야기하며 나누는 것을 좋아하는 저의 취미를 서비스로 만들어보고자 했습니다.</p>
                <p>메인화면에서 등록되어 있는 장소들을 확인할 수 있습니다. 특정 동을 검색하여 해당하는 장소만 확인할 수 있습니다.</p>
                <p>공유하고싶은 장소를 등록하고 사진을 첨부하는 로그를 남길 수 있습니다.</p>
                <p>타입스크립트를 활용하여 런타임에서 발생할 수 있는 타입관련 오류를 제한시켰습니다.</p>
                <p>카카오로그인, 네이버로그인을 활용하여 간편한 SSO를 구현하고 JWT를 활용해 토큰 관리를 하였습니다.</p>
                <p>인피니티 캐로셀 슬라이드, 로딩 스피너, 토스트 팝업 등 UI라이브러리를 사용하지 않고 바닐라 스크립트로 구현하였습니다.</p>

              </div>
              <div className={style.skill}>
                {/* <span>skill</span> */}
                <p>Front-End: &nbsp;
                  <TypeButton name='react.js' type='S' />
                  <TypeButton name='next.js' type='S' />
                  <TypeButton name='typescript' type='S' />
                </p>
                <p>Back-End: &nbsp;
                  <TypeButton name='noede.js' type='S' />
                  <TypeButton name='express.js' type='S' />
                  <TypeButton name='mysql' type='S' />
                  <TypeButton name='mariaDB' type='S' />
                </p>
                <p>Deployment: &nbsp;
                  <TypeButton name='vercel' type='S' />
                  <TypeButton name='aws EC2' type='S' />
                  <TypeButton name='aws RDS' type='S' />
                </p>
                <p>Library: &nbsp;
                  <TypeButton name='mui' type='S' />
                  <TypeButton name='vercel' type='S' />
                  <TypeButton name='redux' type='S' />
                  <TypeButton name='jwt' type='S' />
                </p>
                <p>API: &nbsp;
                  <TypeButton name='kakaoMap' type='S' />
                  <TypeButton name='kakaoLogin' type='S' />
                  <TypeButton name='naverLogin' type='S' />
                </p>
                <p>SDK: &nbsp;
                  <TypeButton name='AWS S3' type='S' />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={style.box__title}>
            <h2 className={style.project__title}>Gludoc Mobile</h2>
            <TypeButton name='#회사' type='C' />
            <TypeButton name='Link' type='L' url='http://gludoc.com/' />
          </div>
          <div className={style.project__detail}>
            <div className={style.box__slider}>
              <Slider images={gludocMobileImgs} />
            </div>
            <div className={style.box__intro}>
              <div className={style.intro}>
                {/* <span>intro</span> */}
                <p>만성질환을 겪고 있는 환자분들의 기록을 쉽게 기록할 수 있게 도움을 주는 서비스입니다. </p>
                <p>카메라로 혈당계, 혈압계, 체중계, 체온계, 처방진을 촬영하면 측정된 기록을 저장합니다.</p>
                <p>채팅서비스를 통하여 의료진과 챗봇으로부터 건강 정보를 얻을 수 있습니다.</p>
                <p>특정 기간을 선택하여 측정된 기록의 추이를 쉽게 확인할 수 있습니다.</p>
                <p>4명의 팀원이 참가하였으며, 화면 UI 개발, 채팅 서비스 개발, 메일 서비스, 백엔드 데이터 핸들링을 담당하였습니다.</p>
              </div>
              <div className={style.skill}>
                {/* <span>skill</span> */}
                <p>Front-End: &nbsp;
                  <TypeButton name='vue.js' type='S' />
                </p>
                <p>Back-End: &nbsp;
                  <TypeButton name='node.js' type='S' />
                  <TypeButton name='express.js' type='S' />
                  <TypeButton name='mysql' type='S' />
                  <TypeButton name='mariaDB' type='S' />
                </p>
                <p>Build / Deployment: &nbsp;
                  <TypeButton name='jenkins' type='S' />
                  <TypeButton name='aws EC2' type='S' />
                  <TypeButton name='aws RDS' type='S' />
                  <TypeButton name='google Playstore' type='S' />
                  <TypeButton name='apple Appstore' type='S' />
                </p>
                <p>Library: &nbsp;
                  <TypeButton name='vue-youtube' type='S' />
                  <TypeButton name='vue-chartjs' type='S' />
                  <TypeButton name='bootstrap' type='S' />
                  <TypeButton name='node-cron' type='S' />
                  <TypeButton name='slack-node' type='S' />
                </p>
                <p>SDK: &nbsp;
                  <TypeButton name='firebase Auth' type='S' />
                  <TypeButton name='firebase RealtimeDB' type='S' />
                  <TypeButton name='firebase crashlytics' type='S' />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={style.box__title}>
            <h2 className={style.project__title}>Gludoc Web</h2>
            <TypeButton name='#회사' type='C' />
            <TypeButton name='Link' type='L' url='http://gludoc.com/' />
          </div>
          <div className={style.project__detail}>
            <div className={style.box__slider}>
              <Slider images={findPhotoImgs} />
            </div>
            <div className={style.box__intro}>
              <div className={style.intro}>
                {/* <span>intro</span> */}
                <p>만성질환을 겪고 있는 환자분들의 기록을 확인할 수 있는 의료진 서비스웹입니다. </p>
                <p>의료진은 웹을 통해 환자가 기록한 건강 데이터 추이를 확인할 수 있습니다.</p>
                <p>채팅서비스를 통해 건강에 도움을 줄 수 있는 컨텐츠를 제공합니다.</p>
                <p>에디터를 통하여 컨텐츠를 개발할 수 있습니다.</p>
                <p>3명의 팀원이 개발하였으며, 화면 UI 개발, 환자 기록 추이 확인, 대쉬보드, 백엔드 데이터 핸들링을 담당하였습니다.</p>
              </div>
              <div className={style.skill}>
                {/* <span>skill</span> */}
                <p>Front-End: &nbsp;
                  <TypeButton name='jsp' type='S' />
                  <TypeButton name='javascript' type='S' />
                </p>
                <p>Back-End: &nbsp;
                  <TypeButton name='java' type='S' />
                  <TypeButton name='mysql' type='S' />
                  <TypeButton name='mariaDB' type='S' />
                </p>
                <p>Build / Deployment: &nbsp;
                  <TypeButton name='jenkins' type='S' />
                  <TypeButton name='aws EC2' type='S' />
                  <TypeButton name='aws RDS' type='S' />
                  <TypeButton name='war' type='S' />
                  <TypeButton name='tomcat 9.0' type='S' />
                </p>
                <p>Library: &nbsp;
                  <TypeButton name='chart.js' type='S' />
                  <TypeButton name='bootstrap' type='S' />
                  <TypeButton name='tui-grid' type='S' />
                  <TypeButton name='ckeditor' type='S' />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={style.box__title}>
            <h2 className={style.project__title}>iLAB Solution</h2>
            <TypeButton name='#회사' type='C' />
            <TypeButton name='Link' type='L' url='https://www.bioconnect.co.kr/lims' />
          </div>
          <div className={style.project__detail}>
            <div className={style.box__slider}>
              <Slider images={findPhotoImgs} />
            </div>
            <div className={style.box__intro}>
              <div className={style.intro}>
                <p>실험실에서 관리하는 전반적인 기기, 시약 등을 관리하고 실험 데이터와 프로세스를 전산화하여 성적서를 발행하는 시스템입니다.</p>
                <p>실험기기에서 생성한 리포트를 서버에 전송시켜 백업과 추적이 가능합니다.</p>
                <p>1차개발 완료된 제품의 고도화를 제안하여 진행하였습니다.</p>
                <p>고도화 된 후 2건의 영업을 성사시켰으며, 고객시연, 요구사항 추가개발, 유지보수를 담당하였습니다.</p>
              </div>
              <div className={style.skill}>
                {/* <span>skill</span> */}
                <p>Front-End: &nbsp;
                  <TypeButton name='jsp' type='S' />
                  <TypeButton name='c#' type='S' />
                </p>
                <p>Back-End: &nbsp;
                  <TypeButton name='java' type='S' />
                  <TypeButton name='mysql' type='S' />
                  <TypeButton name='mariaDB' type='S' />
                </p>
                <p>Build / Deployment: &nbsp;
                  <TypeButton name='war' type='S' />
                  <TypeButton name='tomcat 8.5' type='S' />
                </p>
                <p>Library: &nbsp;
                  <TypeButton name='chart.js' type='S' />
                  <TypeButton name='tui-grid' type='S' />
                  <TypeButton name='bootstrap' type='S' />
                </p>
                <p>SDK: &nbsp;
                  <TypeButton name='zebra-browser-print' type='S' />
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div ref={topRef} className={style.box__util}>
        <button className={style.btn__brightMode} onClick={() => setIsDayMode(!isDaymode)}>
          <FontAwesomeIcon ref={dayRef} className={style.day} icon={faSun} size='2x' color='white' />
          <FontAwesomeIcon ref={nightRef} className={style.night} icon={faMoon} size='2x' color='white' />
        </button>
        <button className={style.btn__top} onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}>
          <FontAwesomeIcon icon={faAnglesUp} size='2x' color='black' />
          <span>Top</span>
        </button>
      </div>
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