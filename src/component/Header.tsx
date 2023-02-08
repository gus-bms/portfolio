import style from '../styles/Header.module.scss'

export default function Header() {

  const handleLogo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={style.box__header}>
      <h1 onClick={handleLogo} className={style.logo}>Gus-Bms</h1>
      <h1 style={{ marginLeft: 'auto' }}>Profile</h1>
      <h1 style={{}}>skill</h1>
      <h1 style={{ marginRight: '10px' }}>project</h1>
    </div>
  )
}
