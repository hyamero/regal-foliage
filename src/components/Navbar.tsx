export const Navbar = () => {
  const navItems = ["Products", "Resources", "About us", "Sustainability"];

  return (
    <nav className="fixed top-0 left-0 right-0 text-xl mt-10 z-50 flex mix-blend-difference justify-between max-w-screen-xl w-[90%] mx-auto text-white font-neue-roman">
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
