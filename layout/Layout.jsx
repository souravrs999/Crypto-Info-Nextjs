import HeaderModule from "../components/Header";
import NavbarModule from '../components/Navbar';
import FooterModule from '../components/Footer';

export default function LayoutModule({  children }) {
  return (
    <>
      <HeaderModule />
      <NavbarModule />
      {children}
      <FooterModule />
    </>
  );
}
