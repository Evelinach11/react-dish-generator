function Header() {
  return (
    <div className="header">
      <img className="logo-img" src="/images/dish-logo.png" alt="logo"></img>
      <nav className="nav">
        <ul className="header-category">
          <li>
            <a href="/">Sweet</a>
          </li>
          <li>
            <a href="/">Dinner</a>
          </li>
          <li>
            <a href="/">Breakfast</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
