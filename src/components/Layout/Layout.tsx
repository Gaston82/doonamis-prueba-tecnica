import { Outlet } from "react-router-dom";

const Layout = (): JSX.Element => (
  <>
    <header>
      <h1>Shows Finder</h1>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
