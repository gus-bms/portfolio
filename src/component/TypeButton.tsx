import style from '../styles/Button.module.scss'

interface iProps {
  name: string;
  type: string;
  url?: string;
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
    <button className={selectClass()}>
      {props.url ? <a href={props.url} target="_blank" rel="noreferrer">{props.name}</a> : <span>{props.name}</span>}
    </button>
  )
}