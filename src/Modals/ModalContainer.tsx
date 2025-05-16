import { type ReactNode } from "react"
import * as Icon from 'react-feather';
import './modal.css'
interface modalType{
    children : ReactNode
    title : string
    closeFn : ()=> void
} 
const ModalContainer = ({children,title,closeFn}:modalType) => {
  return (
    <div className="modal-container">
        <div className="modal-body">
        <div className="modal-header">
            <span className="modal-title">{title}</span>
            <Icon.XCircle onClick={closeFn} size={40} color="#ffffff" cursor="pointer"/>
        </div>
        {children}
        </div>
    </div>
  )
}

export default ModalContainer