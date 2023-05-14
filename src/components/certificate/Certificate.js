import NavigationMenu from '../navigationMenu/navigationMenu'
import { CertificateCard } from './CertificateCard'
import { CertificateHeader } from './CertificateHeader'
import CertificateFooter from './CertificateFooter'
export default function Certificate () {
  return (
    <div>
      <NavigationMenu />
      <CertificateHeader />
      <CertificateCard />
      <CertificateFooter />
    </div>
  )
}
