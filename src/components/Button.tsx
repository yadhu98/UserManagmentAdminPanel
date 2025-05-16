import './button.css'
interface Buttontype {
    title : string
    typeButton?:  'primary'| 'secondary'
    onclickFn : (e: React.FormEvent) => void
}
const Button = ({title,typeButton='primary',onclickFn} : Buttontype) => {
  return (
    <button className={typeButton === 'primary' ? 'button-primary' : 'button-secondary'} onClick={onclickFn}>{title}</button>
  )
}

export default Button