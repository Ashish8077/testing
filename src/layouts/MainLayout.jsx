import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const MainLayout = () => {
  return (
    <>
      <Header />
      {/* Spacer pushes content below the fixed header (TopHeader ~40px + NavBar ~64px = 104px) */}
      <div className="h-[104px]" aria-hidden="true" />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
