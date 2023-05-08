import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useAppSelector } from "../../store/hooks";
import Spinner from "../Spinner/Spinner";

const Layout = (): JSX.Element => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  return (
    <>
      <Header />
      <>
        {isLoading && <Spinner />}
        <Outlet />
      </>
      <Footer />
    </>
  );
};

export default Layout;
