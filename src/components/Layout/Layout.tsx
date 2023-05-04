import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = (): JSX.Element => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
