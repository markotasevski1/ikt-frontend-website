import NavigationMenu from '../navigationMenu/navigationMenu'
import { CertificateCard } from './CertificateCard'
import { CertificateHeader } from './CertificateHeader'
export default function Certificate () {
  return (
    <div>
      <NavigationMenu />
      <CertificateHeader />
      <CertificateCard />
    </div>
  )
}
