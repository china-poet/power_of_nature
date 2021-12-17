import './index.less'
import PicCard from '../../components/PicCard'
import { useState } from 'react'

type BarItem = {
  title: string
  children?: BarItem[]
}

const Home = () => {
  const [activeItem, setActiveItem] = useState<BarItem>()
  const barItem: BarItem[] = [
    {
      title: 'ABOUT',
      children: [{ title: 'child1' }, { title: 'child1' }, { title: 'child1' }],
    },
    {
      title: 'WORKS',
      children: [
        { title: 'child1' },
        { title: 'child1' },
        { title: 'child1' },
        { title: 'child1' },
        { title: 'child1' },
        { title: 'child1' },
      ],
    },
    { title: 'CONTACT' },
  ]

  return (
    <div className="home-page">
      <div className="topbar">
        <div className="logo">NATURE OF POWER</div>
        <div className="bar">
          <div className="bar-content">
            {barItem.map((item) => {
              return (
                <span
                  className={activeItem?.title === item.title ? 'active' : ''}
                  key={item.title}
                  onMouseOver={() => setActiveItem(item)}
                  onMouseOut={() => setActiveItem(undefined)}>
                  {item.title}
                </span>
              )
            })}
            {/* <span className="active">ABOUT</span>
            <span>WORKS</span>
            <span>CONTACT</span> */}
          </div>
          <div className={`bar-draw ${activeItem ? 'active-draw' : ''}`}>
            {activeItem?.children?.map((item) => {
              return <span key={item.title}>{item.title}</span>
            })}
            {/* <span>child1</span>
            <span>child2</span>
            <span>child3</span>
            <span>child1</span>
            <span>child2</span>
            <span>child3</span> */}
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="main">
          <div className="menu-box">
            <div className="title">WORKS</div>
            <div className="content">
              <span className="menu-item">Web/App</span>
              <span className="menu-item">Movie</span>
              <span className="menu-item">Graphics</span>
              <span className="menu-item">Pakages</span>
              <span className="menu-item">Products</span>
            </div>
          </div>
          <div className="pic-view">
            <PicCard className="pic-box" />
            <PicCard className="pic-box" />
            <PicCard className="pic-box" />
            <PicCard className="pic-box" />
            <PicCard className="pic-box" />
            <PicCard className="pic-box" />
            <PicCard className="pic-box" />
            <PicCard className="pic-box" />
            <PicCard className="pic-box" />
            <PicCard className="pic-box" />
            <PicCard className="pic-box" />
            <PicCard className="pic-box" />
            <PicCard className="pic-box" />
            <PicCard className="pic-box" />
            <PicCard className="pic-box" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
