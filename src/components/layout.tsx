import { useRouter } from "next/router";
import NavBar from "./navbar";
import Footer from "./footer";
import Contacts from "./contacts";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const hiddenNavbarPaths = ['/projects', '/resume'];
  const showNavbar = !hiddenNavbarPaths.includes(router.pathname);


  return (
    <>
      <NavBar />
      <Contacts />
      <main >{children}</main>
      {showNavbar && <Footer />}
    </>
  );
};

export default Layout;