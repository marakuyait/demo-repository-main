import './DescriptionStyle.css';
import './CompanyDescription';
import React from 'react'


 const company = {
  name: 'ITF logistics',
  logo: 'https://marketplace.canva.com/EAF5lVrtgYg/1/0/800w/canva-blue-and-orange-logistics-logo-nWC-8tBqWb8.jpg',
  website: 'www.itflogistics.com',
  description: 'We are the best at what we are doing',
  location: 'Chicago',
  fleet: '100+ trucs',
  cargos: ['DryVan', 'Amazon'],
  phone: '+1 456 544 5544',
  fax: '+1 456 544 5544',
  email: 'itf@cargoexample.com',
  facebookLink: 'https://www.facebook.com/itflogistics',
  instagramLink: 'https://www.instagram.com/itflogistics',
}


  return (
    <div>
      <CompanyDescription company={company} />
    </div>
  )


export default DesctriptionData
