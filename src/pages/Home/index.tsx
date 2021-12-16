import './index.less'
import { CSSTransition } from 'react-transition-group'

const Home = () => {
  return (
    <div className="home-page">
      <div className="topbar">
        <div>NATURE OF POWER</div>
        <div>
          <span>ABOUT</span>
          <span>WORKS</span>
          <span>CONTACT</span>
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
            <div className="product-pic">
              <div className="detail">
                <div className="title">Something good thing,right?</div>
                <div className="desc">Web/App</div>
              </div>
            </div>
            <div className="product-pic"></div>
            <div className="product-pic"></div>
            <div className="product-pic"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
