import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function Root() {
  return (
    <>
      <section>
        <Navbar/>
        <Outlet />
      </section>
    </>
  );
}
