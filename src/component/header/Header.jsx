import "./Header.css";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1025) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="siteHeader">
        
        <div className="HeaderMain">
          <div className="HeaderMid">
            <div className="Headlogo">
              <h1 className="logoWood">WoodShape</h1>
            </div>
            <div className="HeadSrch">
              <input
                type="search"
                placeholder="Enter the Wood Choice"
                className="InputSrch"
                aria-label="Search products"
              />
              <CiSearch className="HeadSrchicon" aria-hidden />
            </div>
            <div className="HeadUser">
              <div className="HeaderParent">
                <h2 className="HeadAuthLink">Login</h2>
                <h2 className="HeadAuthLink">SignUp</h2>
                <div className="iconBadge" aria-label="Wishlist items">
                  <span className="zero">0</span>
                  <CiHeart className="HeartIc" aria-hidden />
                </div>
                <div className="iconBadge" aria-label="Cart items">
                  <span className="zero">0</span>
                  <GiShoppingCart className="Shopingcart" aria-hidden />
                </div>
                <button
                  type="button"
                  className="navMenuToggle"
                  aria-expanded={menuOpen}
                  aria-controls="primary-navigation"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMenuOpen((o) => !o)}
                >
                  <GiHamburgerMenu aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbarMain" aria-label="Main">
          <div className="navbarMid">
            <ul
              id="primary-navigation"
              className={`NavunderList ${menuOpen ? "NavunderList--open" : ""}`}
            >
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/PremiumRangeuttingBoards" onClick={closeMenu}>
                  Premium Range Cutting Boards
                </Link>
              </li>
              <li>
                <Link to="/DailyUSeCuttingBoards" onClick={closeMenu}>
                  Daily Use Cutting Boards
                </Link>
              </li>
              <li>
                <Link to="/Office" onClick={closeMenu}>
                  Office Interior
                </Link>
              </li>
              <li>
                <Link to="/Restorent" onClick={closeMenu}>
                  Restaurant Interior
                </Link>
              </li>
              <li>
                <Link to="/GiftPacks" onClick={closeMenu}>
                  Gift Packs
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" onClick={closeMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ContactUs" onClick={closeMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {menuOpen ? (
          <button
            type="button"
            className="navMenuBackdrop"
            aria-label="Close menu"
            onClick={closeMenu}
          />
        ) : null}
      </header>
    </>
  );
}

export default Header;
