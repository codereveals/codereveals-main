import NavLinks from "./NavLinks";

const Menu = () => {
  const links = [
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "About Us",
      path: "/about-us",
    },
    {
      title: "Contact Us",
      path: "/contact-us",
    },
  ];

  // Temporary

  const session = true;
  const isAdmin = true;

  return (
    <nav className="w-[200px] md:w-auto">
      <ul className="flex flex-col md:flex-row gap-7">
        {links.map((link) => {
          return <NavLinks item={link} key={link.title} />;
        })}
      </ul>
    </nav>
  );
};

export default Menu;
