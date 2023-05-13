import NavigationMenu from "../navigationMenu/navigationMenu"
import { CertificateCard } from "./CertificateCard";
import { CertificateHeader } from "./CertificateHeader";
import CertificateFooter from "./CertificateFooter";
export default function(){
    return(
        <div>
            <NavigationMenu/>
            <CertificateHeader/>
            <CertificateCard/>
            <CertificateFooter/>
        </div>
        
    );
}