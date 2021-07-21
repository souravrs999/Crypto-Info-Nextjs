import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../components/themes/ThemeToggle";
import { Search, X } from "react-feather";

const NavbarModule = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      {/* header */}
      <header className="" id="header-main">
        {/* navbar */}
        <nav
          className="navbar navbar-main navbar-expand-lg shadow navbar-light"
          id="navbar-main"
        >
          <div className="container">
            {/* toggler */}
            <button
              className={`navbar-toggler order-lg-2 ml-n3 ml-lg-0 ${
                collapsed ? "collapsed" : ""
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#navbar-main-collapse"
              aria-controls="navbar-main-collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setCollapsed(!collapsed)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* brand */}
            <Link href="/">
              <a className="navbar-brand order-lg-1">
                <Image
                  alt="crypto info logo image"
                  src="/img/brand/dark.svg"
                  id="navbar-logo"
                  width={250}
                  height={100}
                />
              </a>
            </Link>

            {/* collapsed */}
            <div
              className={`collapse navbar-collapse navbar-collapse-overlay order-lg-3 ${
                collapsed ? "" : "show"
              }`}
              id="navbar-main-collapse"
            >
              {/* toggler */}
              <div className="position-relative">
                <button
                  className={`navbar-toggler ${collapsed ? "collapsed" : ""}`}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbar-main-collapse"
                  aria-controls="navbar-main-collapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() => setCollapsed(!collapsed)}
                >
                  <X />
                </button>
              </div>

              {/* main navigation */}
              <ul className="navbar-nav ml-lg-auto mr-3">
                {/* <!-- Overview --> */}
                <li className="nav-item nav-item-spaced">
                  <Link href="/">
                    <a className="nav-link" onClick={() => setCollapsed(true)}>
                      Home
                    </a>
                  </Link>
                </li>

                {/* landing menu */}
                <li className="nav-item nav-item-spaced" data-toggle="hover">
                  <Link href={{ pathname: "/coins", query: { page: 1 } }}>
                    <a className="nav-link" onClick={() => setCollapsed(true)}>
                      Coins
                    </a>
                  </Link>
                </li>

                {/* <!-- Pages menu --> */}
                <li
                  className="nav-item nav-item-spaced dropdown dropdown-animate"
                  data-toggle="hover"
                >
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu dropdown-menu-md p-0">
                    <ul className="list-group list-group-flush px-lg-4">
                      <li
                        className="dropdown dropdown-animate dropdown-submenu"
                        data-toggle="hover"
                      >
                        <a
                          href="#"
                          className="list-group-item list-group-item-action dropdown-toggle"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="d-flex">
                            {/* <!-- SVG icon --> */}
                            <figure style={{ width: "20px" }}>
                              <Image
                                alt="Image placeholder"
                                src="/img/svg/icons/Code.svg"
                                className="svg-inject img-fluid"
                                width={40}
                                height={40}
                              />
                            </figure>
                            {/* <!-- Media body --> */}
                            <div className="ml-3">
                              <h6 className="heading mb-0">Landing</h6>
                              <p className="mb-0">Examples for any scenario.</p>
                            </div>
                          </div>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/landing/agency.html"
                            >
                              Agency
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/landing/business.html"
                            >
                              Business
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/landing/desktop-app.html"
                            >
                              Desktop App
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/landing/development.html"
                            >
                              Development
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/landing/marketing.html"
                            >
                              Marketing
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/landing/money-app.html"
                            >
                              Money App
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/landing/presentation.html"
                            >
                              Presentation
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/landing/saas.html"
                            >
                              Saas
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/landing/studio.html"
                            >
                              Studio
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li
                        className="dropdown dropdown-animate dropdown-submenu"
                        data-toggle="hover"
                      >
                        <a
                          href="#"
                          className="list-group-item list-group-item-action dropdown-toggle"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="d-flex">
                            {/* <!-- SVG icon --> */}
                            <figure style={{ width: "20px" }}>
                              <Image
                                alt="Image placeholder"
                                src="/img/svg/icons/Code.svg"
                                className="svg-inject img-fluid"
                                width={40}
                                height={40}
                              />
                            </figure>
                            {/* <!-- Media body --> */}
                            <div className="ml-3">
                              <h6 className="heading mb-0">Secondary</h6>
                              <p className="mb-0">Examples for any scenario.</p>
                            </div>
                          </div>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/secondary/about.html"
                            >
                              About
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/secondary/services.html"
                            >
                              Services
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/secondary/pricing.html"
                            >
                              Pricing
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/secondary/pricing-alternative.html"
                            >
                              Pricing Alternative
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/secondary/careers.html"
                            >
                              Careers
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/secondary/careers-single.html"
                            >
                              Careers Single
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/secondary/case-study.html"
                            >
                              Case Study
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/secondary/contact.html"
                            >
                              Contact
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/secondary/support.html"
                            >
                              Support
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/secondary/support-topic.html"
                            >
                              Support Topic
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li
                        className="dropdown dropdown-animate dropdown-submenu"
                        data-toggle="hover"
                      >
                        <a
                          href="#"
                          className="list-group-item list-group-item-action dropdown-toggle"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="d-flex">
                            {/* <!-- SVG icon --> */}
                            <figure style={{ width: "20px" }}>
                              <Image
                                alt="Image placeholder"
                                src="/img/svg/icons/Code.svg"
                                className="svg-inject img-fluid"
                                width={40}
                                height={40}
                              />
                            </figure>
                            {/* <!-- Media body --> */}
                            <div className="ml-3">
                              <h6 className="heading mb-0">Blog</h6>
                              <p className="mb-0">Examples for any scenario.</p>
                            </div>
                          </div>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/blog/blog-grid.html"
                            >
                              Blog Grid
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/blog/blog-masonry.html"
                            >
                              Blog Masonry
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/blog/blog-article.html"
                            >
                              Blog Article
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/blog/blog-article-modern.html"
                            >
                              Blog Article Modern
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li
                        className="dropdown dropdown-animate dropdown-submenu"
                        data-toggle="hover"
                      >
                        <a
                          href="#"
                          className="list-group-item list-group-item-action dropdown-toggle"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="d-flex">
                            {/* <!-- SVG icon --> */}
                            <figure style={{ width: "20px" }}>
                              <Image
                                alt="Image placeholder"
                                src="/img/svg/icons/Cog_Wheels.svg"
                                className="svg-inject img-fluid"
                                width={40}
                                height={40}
                              />
                            </figure>
                            {/* <!-- Media body --> */}
                            <div className="ml-3">
                              <h6 className="heading mb-0">Utility</h6>
                              <p className="mb-0">
                                Error pages and everything else.
                              </p>
                            </div>
                          </div>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/utility/coming-soon.html"
                            >
                              Coming Soon
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/utility/error-side-cover.html"
                            >
                              Error Side Cover
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/utility/error-illustration.html"
                            >
                              Error Illustration
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/utility/faq.html"
                            >
                              Faq
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="../../pages/utility/terms.html"
                            >
                              Terms
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* <!-- App menu --> */}
                <li
                  className="nav-item nav-item-spaced dropdown dropdown-animate"
                  data-toggle="hover"
                >
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    App
                  </a>
                  <div className="dropdown-menu dropdown-menu-md p-0">
                    <ul className="list-group list-group-flush px-lg-4">
                      <li
                        className="dropdown dropdown-animate dropdown-submenu"
                        data-toggle="hover"
                      >
                        <a
                          href="#"
                          className="list-group-item list-group-item-action dropdown-toggle"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="media d-flex">
                            {/* <!-- SVG icon --> */}
                            <figure style={{ width: "20px" }}>
                              <Image
                                alt="Image placeholder"
                                src="/img/svg/icons/Secure_Files.svg"
                                className="svg-inject img-fluid"
                                width={40}
                                height={40}
                              />
                            </figure>
                            {/* <!-- Media body --> */}
                            <div className="media-body ml-2">
                              <h6 className="heading mb-0">Authentication</h6>
                              <p className="mb-0">Examples for any scenario.</p>
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-menu">
                          <a
                            className="dropdown-item"
                            href="../../pages/authentication/login-basic.html"
                          >
                            Login Basic
                          </a>

                          <a
                            className="dropdown-item"
                            href="../../pages/authentication/login-side-cover.html"
                          >
                            Login Side Cover
                          </a>

                          <a
                            className="dropdown-item"
                            href="../../pages/authentication/login-overlay.html"
                          >
                            Login Overlay
                          </a>

                          <div className="dropdown-divider"></div>

                          <a
                            className="dropdown-item"
                            href="../../pages/authentication/register-basic.html"
                          >
                            Register Basic
                          </a>

                          <a
                            className="dropdown-item"
                            href="../../pages/authentication/register-side-cover.html"
                          >
                            Register Side Cover
                          </a>

                          <a
                            className="dropdown-item"
                            href="../../pages/authentication/register-overlay.html"
                          >
                            Register Overlay
                          </a>

                          <div className="dropdown-divider"></div>

                          <a
                            className="dropdown-item"
                            href="../../pages/authentication/recover-basic.html"
                          >
                            Recover Basic
                          </a>

                          <a
                            className="dropdown-item"
                            href="../../pages/authentication/recover-side-cover.html"
                          >
                            Recover Side Cover
                          </a>

                          <a
                            className="dropdown-item"
                            href="../../pages/authentication/recover-overlay.html"
                          >
                            Recover Overlay
                          </a>
                        </div>
                      </li>

                      <li
                        className="dropdown dropdown-animate dropdown-submenu"
                        data-toggle="hover"
                      >
                        <a
                          href="#"
                          className="list-group-item list-group-item-action dropdown-toggle"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="media d-flex">
                            {/* <!-- SVG icon --> */}
                            <figure style={{ width: "20px" }}>
                              <Image
                                alt="Image placeholder"
                                src="/img/svg/icons/Task.svg"
                                className="svg-inject img-fluid"
                                width={40}
                                height={40}
                              />
                            </figure>
                            {/* <!-- Media body --> */}
                            <div className="media-body ml-2">
                              <h6 className="heading mb-0">Account</h6>
                              <p className="mb-0">
                                Account management made cool.
                              </p>
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-menu">
                          <a
                            className="dropdown-item"
                            href="../../pages/account/profile.html"
                          >
                            Profile
                          </a>

                          <a
                            className="dropdown-item"
                            href="../../pages/account/settings.html"
                          >
                            Settings
                          </a>

                          <a
                            className="dropdown-item"
                            href="../../pages/account/billing.html"
                          >
                            Billing
                          </a>

                          <a
                            className="dropdown-item"
                            href="../../pages/account/cards.html"
                          >
                            Cards
                          </a>

                          <a
                            className="dropdown-item"
                            href="../../pages/account/security.html"
                          >
                            Security
                          </a>

                          <a
                            className="dropdown-item"
                            href="../../pages/account/users.html"
                          >
                            Users
                          </a>

                          <a
                            className="dropdown-item"
                            href="../../pages/account/notifications.html"
                          >
                            Notifications
                          </a>
                        </div>
                      </li>

                      <li
                        className="dropdown dropdown-animate dropdown-submenu"
                        data-toggle="hover"
                      >
                        <a
                          href="#"
                          className="list-group-item list-group-item-action dropdown-toggle"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="media d-flex">
                            {/* <!-- SVG icon --> */}
                            <figure style={{ width: "20px" }}>
                              <Image
                                alt="Image placeholder"
                                src="/img/svg/icons/Task.svg"
                                className="svg-inject img-fluid"
                                width={40}
                                height={40}
                              />
                            </figure>
                            {/* <!-- Media body --> */}
                            <div className="media-body ml-2">
                              <h6 className="heading mb-0">Boards</h6>
                              <p className="mb-0">
                                Account management made cool.
                              </p>
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-menu">
                          <a
                            className="dropdown-item"
                            href="../../pages/boards/overview.html"
                          >
                            Overview
                          </a>

                          <a
                            className="dropdown-item"
                            href="../../pages/boards/projects.html"
                          >
                            Projects
                          </a>

                          <a
                            className="dropdown-item"
                            href="../../pages/boards/tasks.html"
                          >
                            Tasks
                          </a>

                          <a
                            className="dropdown-item"
                            href="../../pages/boards/integrations.html"
                          >
                            Integrations
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-none d-lg-block py-3 bg-transparent">
                          <div className="row">
                            <div className="col-sm-6">
                              <a
                                href="../../pages/boards/overview.html"
                                className="dropdown-item"
                              >
                                Dashboard
                              </a>
                              <a
                                href="../../pages/boards/projects.html"
                                className="dropdown-item"
                              >
                                Projects
                              </a>
                              <a
                                href="../../pages/boards/tasks.html"
                                className="dropdown-item"
                              >
                                Tasks
                              </a>
                              <a
                                href="../../pages/boards/integrations.html"
                                className="dropdown-item"
                              >
                                Integrations
                              </a>
                            </div>
                            <div className="col-sm-6">
                              <a
                                href="../../pages/account/settings.html"
                                className="dropdown-item"
                              >
                                Settings
                              </a>
                              <a
                                href="../../pages/account/billing.html"
                                className="dropdown-item"
                              >
                                Billing
                              </a>
                              <a
                                href="../../pages/account/cards.html"
                                className="dropdown-item"
                              >
                                Cards
                              </a>
                              <a
                                href="../../pages/account/users.html"
                                className="dropdown-item"
                              >
                                Users
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* <!-- Docs menu --> */}
                <li
                  className="nav-item nav-item-spaced dropdown dropdown-animate"
                  data-toggle="hover"
                >
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Docs
                  </a>
                  <div className="dropdown-menu dropdown-menu-md p-0">
                    <div className="list-group list-group-flush px-lg-4">
                      <a
                        href="../../docs/index.html"
                        className="list-group-item list-group-item-action"
                        role="button"
                      >
                        <div className="d-flex">
                          {/* <!-- SVG icon --> */}
                          <span className="h6">
                            <i data-feather="book"></i>
                          </span>
                          {/* <!-- Media body --> */}
                          <div className="ml-3">
                            <h6 className="heading mb-0">Documentation</h6>
                            <small className="text-sm">
                              Quick setup and build tools
                            </small>
                          </div>
                        </div>
                      </a>

                      <div className="py-3">
                        <div className="row">
                          <div className="col-sm-6">
                            <a
                              href="../../docs/getting-started/quick-start.html"
                              className="dropdown-item"
                            >
                              Quick Start
                            </a>
                            <a
                              href="../../docs/getting-started/build-tools.html"
                              className="dropdown-item"
                            >
                              Build Tools
                            </a>
                            <a
                              href="../../docs/getting-started/customization.html"
                              className="dropdown-item"
                            >
                              Customization
                            </a>
                            <a
                              href="../../docs/getting-started/file-structure.html"
                              className="dropdown-item"
                            >
                              File Structure
                            </a>
                            <a
                              href="../../docs/components/alerts.html"
                              className="dropdown-item"
                            >
                              Components
                            </a>
                          </div>
                          <div className="col-sm-6">
                            <a
                              href="../../docs/styleguide/icons.html"
                              className="dropdown-item"
                            >
                              Icons
                            </a>
                            <a
                              href="../../docs/styleguide/svg-icons.html"
                              className="dropdown-item"
                            >
                              SVG Icons
                            </a>
                            <a
                              href="../../docs/styleguide/illustrations.html"
                              className="dropdown-item"
                            >
                              Illustrations
                            </a>
                            <a
                              href="../../docs/plugins/animate.html"
                              className="dropdown-item"
                            >
                              Plugins
                            </a>
                          </div>
                        </div>
                      </div>

                      <a
                        href="../../docs/components/alerts.html"
                        className="list-group-item list-group-item-action"
                        role="button"
                      >
                        <div className="d-flex">
                          {/* <!-- SVG icon --> */}
                          <span className="h6">
                            <i data-feather="code"></i>
                          </span>
                          {/* <!-- Media body --> */}
                          <div className="ml-3">
                            <h6 className="heading mb-0">Components</h6>
                            <small className="text-sm">
                              Component examples and more
                            </small>
                          </div>
                        </div>
                      </a>
                      <a
                        href="../../docs/changelog.html"
                        className="list-group-item list-group-item-action"
                        role="button"
                      >
                        <div className="d-flex">
                          {/* <!-- SVG icon --> */}
                          <span className="h6">
                            <i data-feather="file-text"></i>
                          </span>
                          {/* <!-- Media body --> */}
                          <div className="ml-3">
                            <h6 className="heading mb-0">Changelog</h6>
                            <small className="text-sm">
                              Component examples and more
                            </small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>

              {/* <!-- Right navigation --> */}
              <ul className="navbar-nav align-items-lg-center d-none d-lg-flex ml-lg-auto">
                <li className="nav-item">
                  <a
                    data-action="omnisearch-open"
                    data-target="#omnisearch"
                    className="nav-link nav-link-icon px-2"
                  >
                    <Search />
                  </a>
                </li>
                <li className="nav-item">
                  <ThemeToggle />
                </li>

                <li className="nav-item">
                  <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow p-3">
                    <h6 className="dropdown-header px-0 mb-2 text-primary">
                      Hi, Emma!
                    </h6>
                    <a
                      href="../../pages/account/profile.html"
                      className="dropdown-item"
                    >
                      <i data-feather="user"></i>
                      <span>My profile</span>
                    </a>
                    <a
                      href="../../pages/account/billing.html"
                      className="dropdown-item"
                    >
                      <i data-feather="credit-card"></i>
                      <span>Billing</span>
                    </a>
                    <a
                      href="../../pages/boards/overview.html"
                      className="dropdown-item"
                    >
                      <i data-feather="activity"></i>
                      <span>Dashboard</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a
                      href="../../pages/account/settings.html"
                      className="dropdown-item"
                    >
                      <i data-feather="settings"></i>
                      <span>Settings</span>
                    </a>
                    <a
                      href="../../pages/authentication/login-basic.html"
                      className="dropdown-item"
                    >
                      <i data-feather="log-out"></i>
                      <span>Logout</span>
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown dropdown-animate">
                  <a
                    className="nav-link nav-link-icon px-2"
                    href="#modal-notifications"
                    role="button"
                    data-toggle="modal"
                  >
                    <i data-feather="bell"></i>
                  </a>
                </li>
              </ul>

              {/* <!-- Mobile button --> */}
              <div className="d-lg-none px-4 text-center">
                <a
                  href="#"
                  className="btn btn-block btn-sm btn-warning"
                  target="_blank"
                  rel="noreferrer"
                >
                  Purchase now
                </a>
              </div>
            </div>

            {/* <!-- Avatar menu --> */}
            <div className="order-lg-4 ml-lg-3">
              <a
                className=""
                href="#modal-profile"
                role="button"
                data-toggle="modal"
              >
                <span className="avatar rounded-circle">
                  <Image
                    alt="Image placeholder"
                    src="/img/theme/light/person-auth.jpg"
                    width={60}
                    height={60}
                  />
                </span>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarModule;
