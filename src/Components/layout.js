import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="products">Products</Link> | {""}
        <Link to="contact">Contact</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
