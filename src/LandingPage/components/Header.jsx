import React from 'react'
import truckImage from '../images/volvo.png'

const Header = () => {
  return (
    <div className="col-6 ps-5">
      <div className="row-md-6" style={{ width: '30rem' }}>
        <div>
          <h1 className="lh-sm">All your trucker needs in one place</h1>
        </div>
        <div className="mt-4">
          <p className="lh-base">
            Reprehenderit esse id veniam ut veniem non ex adipiscing amer
            ullamco dolor proident
          </p>
        </div>
      </div>
      <div className="row-md-6 mt-5">
        <img
          src={truckImage}
          style={{ width: '29.5rem', height: '22.5rem' }}
          alt="truck image"
        />
      </div>
    </div>
  )
}

export default Header
