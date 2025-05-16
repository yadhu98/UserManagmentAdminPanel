import { type ReactNode } from 'react'
import './graphcard.css'
const GraphCard = ({title,children} : {title : string , children : ReactNode}) => {
  return (
    <div className='graph-main'>
        <div className='graph-title'>{title}</div>
        {children}
    </div>
  )
}

export default GraphCard