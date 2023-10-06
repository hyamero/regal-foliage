export const Navbar = () => {
  const navItems = ["Products", "Resources", "About us", "Sustainability"];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 mx-auto mt-10 flex w-[90%] max-w-screen-xl justify-between font-neue-roman text-xl text-white mix-blend-difference">
      <p className="logo">logo.</p>

      <ul className="flex gap-10">
        {navItems.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>

      <ul className="flex gap-10">
        <li>
          <a href="#">Search</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>
    </nav>
  );
};
