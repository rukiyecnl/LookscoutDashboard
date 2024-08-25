
import SideBarIcons from "../components/sideBarIcons";
import 'bootstrap/dist/css/bootstrap.min.css';

// JavaScript bileşenlerini (dropdowns, modals, tooltips, vb.) kullanma

import Content from "../components/Content";

export default function Home() {
  return (
    <div className="container-custom">
      <div className="row ">
        <div className="d-none d-xl-flex col-xxl-3 col-xl-4" >
          <SideBarIcons />
        </div>
        <div className="col-12 col-xxl-9 col-xl-8" >
          <Content />
        </div>
      </div>
    </div>
  );
}
