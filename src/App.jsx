import './App.css'
import CompanyDetailsPage from './dan/CompanyDetailsPage'
import CompanyDescription from './karine/components/CompanyDescription'
import LandingPage from './LandingPage/LandingPage'
import company from './DescriptionData'

function App() {
  return (
    <>
      {/* <CompanyDetailsPage /> */}
      <LandingPage />
      <CompanyDescription company={company} />
    </>
  )
}

export default App
