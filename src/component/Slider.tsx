import { useState } from 'react'
import style from '../styles/Slider.module.scss'

export default function Slider() {
  const [current, setCurrent] = useState<number>(1);

  return (
    <div className={style.container}>
      <div className={style.box__slider}>
      </div>
      <div className={style.box__locate}>
        {current + ' / ' + current + 3}
      </div>
    </div>
  )
}