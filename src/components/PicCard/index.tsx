import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.less'

export type PicCardProps = {
  className?: string
}

const PicCard = (props: PicCardProps) => {
  const [signal, setSignal] = useState<boolean>(false)
  return (
    <div
      className={`product-pic ${props.className}`}
      onMouseOver={() => setSignal(true)}
      onMouseOut={() => setSignal(false)}>
      <CSSTransition
        classNames="detail-slide"
        in={signal}
        timeout={600}
        mountOnEnter
        unmountOnExit>
        <div className="detail">
          <div className="title">There are some good things,right?</div>
          <div className="desc">Web/App</div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default PicCard
