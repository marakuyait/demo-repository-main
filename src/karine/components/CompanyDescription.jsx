import React from 'react'
import './DescriptionStyle.css'

const CompanyDescription = ({ company }) => {
  return (
    <div className="company-card">
      <div className="company-logo">
        <img src={company.logo} alt={`${company.name}`} />
      </div>
      <div className="company-details">
        <h2>{company.name}</h2>
        <a href={company.website}>{company.website}</a>
        <p>
          <strong>{company.description}</strong>
        </p>
        <div className="company-info">
          <p>
            <strong>Owner-Operator, Lease, Company Driver</strong>
          </p>
          <p>
            <strong>Location:</strong> {company.location}
          </p>
          <p>
            <strong>Fleet:</strong> {company.fleet}
          </p>
          <p>
            <strong>Cargos:</strong> {company.cargos.join(', ')}
          </p>
        </div>
        <div className="social-media-icons">
          <a
            href={company.facebookLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.similarpng.com/very-thumbnail/2020/04/Popular-facebook-Logo-png.png"
              alt="Facebook"
            />
          </a>
          <a
            href={company.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lv-iEOWtRxGDqsOR-Pa1kIiqN298569zVA&s"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
      <div className="extra-info">
        <p>
          <strong>Phone:</strong> {company.phone}
        </p>
        <p>
          <strong>Fax:</strong> {company.fax}
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
        <button className="company-page-button">Company Page</button>
      </div>
      <button className="apply-button">APPLY FOR JOB</button>
    </div>
  )
}

export default CompanyDescription
