import { useEffect } from 'react';
import style from '../styles/Button.module.scss'

interface iProps {
  name: string;
  type: string;
  url?: string;
}

export default function TypeButton(props: iProps) {

  const selectClass = () => {
    return props.type === 'P' ? style.personal : (props.type === 'C' ? style.company : style.link)
  }

  return (
    <button className={selectClass()}>
      {props.url ? <a href={props.url} target="_blank" rel="noreferrer">{props.name}</a> : props.name}
      {/* {props.name} */}
    </button>
  )
}