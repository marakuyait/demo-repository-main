import React from 'react'
import { Link } from 'react-router-dom'
import companies from '../images/companies.jpeg'
import jobs from '../images/jobs.jpeg'
import trucks from '../images/trucks.jpeg'
import mechanics from '../images/mechanics.jpeg'
import trafficLawyers from '../images/traffic-lawyers.jpeg'
import other from '../images/other.jpeg'

const Links = () => {
  return (
    <div className="col-6 pe-5 ps-5">
      <div className="row text-center">
        <div className="col-6 ps-5">
          <div>
            <img src={companies} alt="" />
          </div>
          <div className="mt-3">
            <Link>Companies</Link>
          </div>
        </div>
        <div className="col-6 pe-5">
          <div>
            <img src={jobs} alt="" />
          </div>
          <div className="mt-3">
            <Link>Jobs</Link>
          </div>
        </div>
      </div>

      <div className="row text-center mt-3">
        <div className="col-6 ps-5">
          <div>
            <img src={trucks} alt="" />
          </div>
          <div className="mt-3">
            <Link>Trucks</Link>
          </div>
        </div>
        <div className="col-6 pe-5">
          <div>
            <img src={mechanics} alt="" />
          </div>
          <div className="mt-3">
            <Link>Mechanics</Link>
          </div>
        </div>
      </div>

      <div className="row text-center mt-3">
        <div className="col-6 ps-5">
          <div>
            <img src={trafficLawyers} alt="" />
          </div>
          <div className="mt-3">
            <Link>Traffic Lawyers</Link>
          </div>
        </div>
        <div className="col-6 pe-5">
          <div>
            <img src={other} alt="" />
          </div>
          <div className="mt-3">
            <Link>Other...</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Links
