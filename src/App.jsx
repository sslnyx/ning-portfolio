import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import getData from "../lib/api";
import { setViewHeight } from "../lib/plugins";

function App() {
  const [pageData, setPageData] = useState();
  useEffect(async () => {
    const data = await getData();
    setPageData(data);
    setViewHeight();
    window.addEventListener("resize", () => {
      setViewHeight();
    });

    return () => {
      window.removeEventListener("resize", () => {
        setViewHeight();
      });
    };
  }, []);

  return (
    <div className="App min-h-screen flex flex-col">
      {pageData ? <Outlet context={pageData} /> : ""}
      <SiteFooter />
    </div>
  );
}

export default App;
