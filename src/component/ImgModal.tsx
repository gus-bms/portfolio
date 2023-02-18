import { useRef, Dispatch, SetStateAction, useEffect } from "react"
import style from '../styles/Modal.module.scss'

interface Iprops {
  url: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: any;
}

export default function Modal(props: Iprops) {
  const modalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  })
  return (
    <div ref={modalRef} className={style.modal__div} onClick={e => {
      modalRef.current === e.target && props.setIsOpen(false)
    }}>
      <div className={style.container}>
        <img src={props.url} alt='project' />
        <button className={style.close} onClick={() => props.setIsOpen(false)}>
          닫기
        </button>
      </div>
    </div>
  )
}