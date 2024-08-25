
import SideBarIcons from "../components/sideBarIcons";
import 'bootstrap/dist/css/bootstrap.min.css';

// JavaScript bileşenlerini (dropdowns, modals, tooltips, vb.) kullanma

import Content from "../components/Content";
import SideBarContent from "../components/SideBarContent";

export default function Home() {
  return (
    <div className="container-custom">
      <div className="d-flex">
        <div className="d-none d-lg-flex" >
          <SideBarIcons />
        </div>
        <div className="flex-grow-1 w-100" >
          <Content />
        </div>
      </div>
    </div>
  );
}
