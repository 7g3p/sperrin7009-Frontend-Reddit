import NavBar from "./nav.js";

const Layout = (props) => {
  return (
    <div className="relative min-h-screen">
        <NavBar />
        <main className="pb-32 mx-auto sm:max-w-screen-lg">{props.children}</main>
    </div>
  );
};

export default Layout;