import style from '../styles/Button.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface iProps {
  icon?: IconProp;
  name: string;
  type: string;
  url?: string;
  style?: object;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function TypeButton(props: iProps) {

  const selectClass = () => {
    switch (props.type) {
      case 'P':
        return style.personal
      case 'C':
        return style.company
      case 'S':
        return style.skill
      case 'L':
        return style.link
    }
  }

  return (
    <button className={[style.button_base, selectClass()].join(' ')} style={props.style} onClick={props.onClick ? props.onClick : () => { '' }}>
      {props.icon ? <FontAwesomeIcon icon={props.icon} color='black' size='1x' /> : ''}
      {props.url ? <a href={props.url} target="_blank" rel="noreferrer">{props.name}</a> : <span>{props.name}</span>}
    </button>
  )
}