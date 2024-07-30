import { Link } from "react-router-dom";
export function Header() {
  return (
    <>
      <header>
        <label>
          <input type="checkbox" />
          <span class="menu-mobile">
            {" "}
            <span class="hamburger"></span>{" "}
          </span>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/culinaria">Culinária</Link>
            </li>
            <li>
              <Link to="/festas">Festas Populares</Link>
            </li>
            <li>
              <Link to="/artesanato">Artesanato</Link>
            </li>
            <li>
              <Link to="/turismo">Pontos Turísticos</Link>
            </li>
          </ul>
        </label>

        <nav id="navbar">
          <a href="#home" class="logo">
            <img src="./assets/bandeira-ma.png" alt="logotipo do site" />
          </a>
          <div class="menu">
            <ul class="menu__itens">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/culinaria">Culinária</Link>
              </li>
              <li>
                <Link to="/festas">Festas Populares</Link>
              </li>
              <li>
                <Link to="/artesanato">Artesanato</Link>
              </li>
              <li>
                <Link to="/turismo">Pontos Turísticos</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
