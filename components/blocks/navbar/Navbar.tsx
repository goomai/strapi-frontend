import Link from "next/link";
import LinkType from "types/link";
import { FC, Fragment, ReactElement, useRef } from "react";
// -------- custom hook -------- //
import useSticky from "hooks/useSticky";
// -------- custom component -------- //
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";
import ListItemLink from "components/reuseable/links/ListItemLink";
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// -------- partial header component -------- //
import Info from "./partials/Info";
import Search from "./partials/Search";
import Social from "./partials/Social";
import Signin from "./partials/Signin";
import Signup from "./partials/Signup";
import Language from "./partials/Language";
import MiniCart from "./partials/MiniCart";
// -------- data -------- //
import {
  demos,
  pages,
  blogsNavigation,
  blocksNavigation,
  projectsNavigation,
  documentionNavigation,
} from "data/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

// ===================================================================
type NavbarProps = {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
};
// ===================================================================

const Navbar: FC<NavbarProps> = (props) => {
  const {
    navClassName,
    info,
    search,
    social,
    language,
    button,
    cart,
    fancy,
    navOtherClass,
    stickyBox,
    logoAlt,
  } = props;
  const [activeNav, setActiveNav] = useState("compiler");
  const sticky = useSticky(10);
  const navbarRef = useRef<HTMLElement | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (router) {
      const path = router.pathname?.split("/")[1];
      setActiveNav(path);
    }
  }, [router]);
  console.log(activeNav);
  // dynamically render the logo
  const logo = sticky ? "logo-dark" : logoAlt ?? "logo-dark";
  // dynamically added navbar classname
  const fixedClassName =
    "navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed shadow-sm mb-5 p-2 bg-white";

  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => (
      <ListItemLink
        href={item.url}
        title={item.title}
        linkClassName="dropdown-item"
        key={item.id}
      />
    ));
  };

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={
            <div>
              <img
                alt="logo"
                src={`/img/logo.svg`}
                srcSet={`/img/logo@2x.png 2x`}
              />
              <img alt="logo" src={`/img/logo2.svg`} className="px-2" />
            </div>

            // <h2 className="text-dark fs-25 mb-0">Goom</h2>
          }
        />
      </div>

      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">Goom</h3>
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            {/* ===================== demos nav item ===================== */}
            {/* <li className="nav-item dropdown dropdown-mega">
              <Link
                href="#"
                className={`nav-link ${activeNav === "Learn" && "item-active"}`}
                onClick={() => setActiveNav("Learn")}
              >
                Learn Python
              </Link> */}

            {/* <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                <li className="mega-menu-content mega-menu-scroll">
                  <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled">
                    {demos.map(({ id, title, url, thumnail }) => (
                      <li className="col" key={id}>
                        <Link legacyBehavior href={url}>
                          <a className="dropdown-item">
                            <img
                              alt={title}
                              src={`/img/demos/${thumnail}.jpg`}
                              srcSet={`/img/demos/${thumnail}@2x.jpg 2x`}
                              className="rounded lift d-none d-lg-block"
                            />
                            <span className="d-lg-none">{title}</span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <span className="d-none d-lg-flex">
                    <i className="uil uil-direction" />
                    <strong>Scroll to view more</strong>
                  </span>
                </li>
              </ul>*/}
            {/* </li> */}

            {/*  ===================== pages nav item  ===================== */}
            <li className="nav-item ">
              <Link
                href="/python-compiler-playground"
                className={`nav-link ${
                  activeNav === "python-compiler-playground" && "item-active"
                }`}
                // onClick={() => setActiveNav("python-compiler-playground")}
              >
                Python Compiler
              </Link>
            </li>
            <li>
              <Link
                href="/articles/"
                className={`nav-link ${
                  activeNav === "python-articles" && "item-active"
                }`}
                // onClick={() => setActiveNav("python-articles")}
              >
                Python Articles
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                href="/about"
                className={`nav-link ${activeNav === "about" && "item-active"}`}
                // onClick={() => setActiveNav("about")}
              >
                About
              </Link>
            </li>
            {/* <li className="nav-item ">
              <Link
                href="/contact"
                className={`nav-link ${
                  activeNav === "contact" && "item-active"
                }`}
                // onClick={() => setActiveNav("contact")}
              >
                Contact Us
              </Link>
            </li> */}

            {/* <li className="nav-item ">
              <Link
                href="/terms"
                className={`nav-link ${activeNav === "terms" && "item-active"}`}
                onClick={() => setActiveNav("terms")}
              >
                Terms
              </Link>
            </li> */}
            {/* <li className="nav-item ">
              <Link
                href="#"
                className={`nav-link ${
                  activeNav === "articles" && "item-active"
                }`}
                onClick={() => setActiveNav("articles")}
              >
                Articles
              </Link>
            </li> */}
            {/* ===================== projects nav item  ===================== */}
            {/* <li className="nav-item dropdown">
              <DropdownToggleLink
                title="Projects"
                className="nav-link dropdown-toggle"
              />

              <div className="dropdown-menu dropdown-lg">
                <div className="dropdown-lg-content">
                  {projectsNavigation.map(({ title, children }, i) => (
                    <div key={title + i}>
                      <h6 className="dropdown-header">{title}</h6>
                      <ul className="list-unstyled">{renderLinks(children)}</ul>
                    </div>
                  ))}
                </div>
              </div>
            </li> */}

            {/* ===================== blog nav item ===================== */}
            {/* <li className="nav-item dropdown">
              <DropdownToggleLink
                title="Blog"
                className="nav-link dropdown-toggle"
              />

              <ul className="dropdown-menu">
                {blogsNavigation.map(({ id, url, title, children }) => {
                  if (!url && children) {
                    return (
                      <li
                        className="dropdown dropdown-submenu dropend"
                        key={id}
                      >
                        <DropdownToggleLink title="Blog Posts" />
                        <ul className="dropdown-menu">
                          {renderLinks(children)}
                        </ul>
                      </li>
                    );
                  }
                  return (
                    <ListItemLink
                      key={id}
                      href={url}
                      title={title}
                      linkClassName="dropdown-item"
                    />
                  );
                })}
              </ul>
            </li> */}
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          {/* <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink
                title="info@email.com"
                className="link-inverse"
                href="mailto:first.last@email.com"
              />
              <br />
              <NextLink href="tel:0123456789" title="00 (123) 456 78 90" />
              <br />
              <SocialLinks />
            </div>
          </div> */}
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* ============= language dropdwown ============= */}
          {/* {language && <Language />} */}

          {/* ============= info button ============= */}
          {info && (
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-info"
              >
                <i className="uil uil-info-circle" />
              </a>
            </li>
          )}

          {/* ============= search icon button ============= */}
          {search && (
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-search"
              >
                <i className="uil uil-search" style={{ color: "#FD7C47" }} />
              </a>
            </li>
          )}

          {/* ============= contact button ============= */}
          {button && <li className="nav-item d-none d-md-block">{button}</li>}

          {/* ============= shopping cart button ============= */}
          {cart && (
            <li className="nav-item">
              <a
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-cart"
                className="nav-link position-relative d-flex flex-row align-items-center"
              >
                <i className="uil uil-shopping-cart" />
                <span className="badge badge-cart bg-primary">3</span>
              </a>
            </li>
          )}

          {/* ============= social icons link ============= */}
          {social && <Social />}

          {/* ============= humburger button for small device ============= */}
          <li className="nav-item d-lg-none">
            <button
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas-nav"
              className="hamburger offcanvas-nav-btn"
            >
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <nav ref={navbarRef} className={navClassName}>
        <div
          className="container flex-lg-row flex-nowrap align-items-center justify-content-between"
          style={{ height: "80px" }}
        >
          {headerContent}
        </div>
      </nav>

      {/* ============= signin modal ============= */}
      <Signin />

      {/* ============= signup modal ============= */}
      <Signup />

      {/* ============= info sidebar ============= */}
      {info && <Info />}

      {/* ============= show search box ============= */}
      {search && <Search />}

      {/* ============= cart sidebar ============= */}
      {cart && <MiniCart />}
    </Fragment>
  );
};

// set deafult Props
Navbar.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  // navOtherClass: "navbar-other w-100 d-flex ms-auto",
  navClassName:
    "navbar navbar-expand-lg center-nav transparent navbar-light shadow-sm mb-5 bg-white",
};

export default Navbar;
