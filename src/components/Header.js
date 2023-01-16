function Header({ setCategory }) {
  return (
    <div className="header">
      <img className="logo-img" src="/images/dish-logo.png" alt="logo"></img>
      <nav className="nav">
        <ul className="header-category">
          <li>
            <a
              onClick={() => {
                setCategory("sweet");
              }}
            >
              Sweet
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setCategory("dinner");
              }}
            >
              Dinner
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setCategory("breakfast");
              }}
            >
              Breakfast
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
