import { useState } from "react";
import LogoLightMode from "../../public/logo--zorus--dark.svg?url";
import LogoDarkMode from "../../public/logo--zorus--white.svg?url";
import "../../src/styles/global.css";

const NavbarLightMode = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <>
      <header className="container sticky top-5 z-50 mx-auto max-w-7xl px-4 md:px-6">
        <nav
          className="relative z-10 flex items-center justify-between rounded-md border border-white/5 bg-slate-600/5 px-5 py-2 ring-1 ring-slate-950/25 backdrop-blur-2xl"
          aria-label="Global"
        >
          <div className="absolute left-1.5 top-1.5 size-[3px] rounded-full bg-slate-950/25"></div>
          <div className="absolute bottom-1.5 left-1.5 size-[3px] rounded-full bg-slate-950/25"></div>
          <div className="absolute right-1.5 top-1.5 size-[3px] rounded-full bg-slate-950/25"></div>
          <div className="absolute bottom-1.5 right-1.5 size-[3px] rounded-full bg-slate-950/25"></div>

          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Zorus</span>
              <img
                className="h-10 w-auto"
                src={LogoLightMode}
                alt="Zorus logo"
                loading="eager"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-6 text-[#041342]"
                width="448"
                height="352"
                viewBox="0 0 448 352"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H448V32H0V0ZM0 160H448V192H0V160ZM448 320V352H0V320H448Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden items-center space-x-6 text-sm font-medium uppercase text-white lg:flex lg:flex-wrap">
            <li
              className="relative flex cursor-pointer items-center gap-x-1.5 lg:py-3"
              onMouseEnter={() => setOpenDropdown("compare")}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <p className="font-monospace text-base font-semibold !text-[#041342] transition duration-300 ease-in-out hover:text-[#00f0ff]">
                Compare
              </p>
              <button className="shrink-0">
                <span className="sr-only">
                  Show submenu for "Compare products"
                </span>
                <svg
                  className="h-3 w-3 fill-[#00f0ff]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                >
                  <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
                </svg>
              </button>
              {/* 2nd level menu */}
              {openDropdown === "compare" && (
                <ul
                  className={`absolute left-1/2 top-11 min-w-[240px] origin-top-right -translate-x-1/2 rounded-lg bg-gradient-to-b from-[#05B4F4] to-[#660DAB] p-px shadow-xl transition-all duration-300 ${
                    openDropdown === "compare"
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="dropdown-nav-bg space-y-6 overflow-hidden rounded-lg p-8">
                    <li>
                      <a
                        href="/zorus-vs-cisco-umbrella"
                        className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                      >
                        Cisco Umbrella
                      </a>
                    </li>
                    <li>
                      <a
                        href="/zorus-vs-dnsfilter"
                        className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                      >
                        DNSFilter
                      </a>
                    </li>
                    <li>
                      <a
                        href="/zorus-vs-webroot"
                        className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                      >
                        WebRoot DNS
                      </a>
                    </li>
                    <li>
                      <a
                        href="/zorus-vs-webtitan"
                        className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                      >
                        WebTitan
                      </a>
                    </li>
                    <li>
                      <a
                        href="/zorus-vs-competitors"
                        className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                      >
                        Compare All
                      </a>
                    </li>
                  </div>
                </ul>
              )}
            </li>
            <li className="lg:py-3">
              <a
                href="/about"
                className="font-monospace text-base font-semibold uppercase !text-[#041342] transition duration-300 ease-in-out hover:text-[#00f0ff]"
              >
                About
              </a>
            </li>
            <li className="lg:py-3">
              <a
                href="/referrals"
                className="font-monospace text-base font-semibold uppercase !text-[#041342] transition duration-300 ease-in-out hover:text-[#00f0ff]"
              >
                Referrals
              </a>
            </li>
            <li
              className="relative flex cursor-pointer items-center gap-x-1.5 lg:py-3"
              onMouseEnter={() => setOpenDropdown("resources")}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <p className="font-monospace text-base font-semibold uppercase !text-[#041342] transition duration-300 ease-in-out hover:text-[#00f0ff]">
                Resources
              </p>
              <button className="shrink-0">
                <span className="sr-only">
                  Show submenu for "Compare products"
                </span>
                <svg
                  className="h-3 w-3 fill-[#00f0ff]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                >
                  <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
                </svg>
              </button>
              {/* 2nd level menu */}
              {openDropdown === "resources" && (
                <ul
                  className={`absolute left-1/2 top-11 min-w-[240px] origin-top-right -translate-x-1/2 rounded-lg bg-gradient-to-b from-[#05B4F4] to-[#660DAB] p-px shadow-xl transition-all duration-300 ${
                    openDropdown === "resources"
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="dropdown-nav-bg space-y-6 rounded-lg p-8">
                    <li>
                      <a
                        href="/blog"
                        className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="/webinars"
                        className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                      >
                        Webinars
                      </a>
                    </li>
                    <li>
                      <a
                        href="/events"
                        className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                      >
                        Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="/between-two-keyboards"
                        className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                      >
                        Between Two Keyboards
                      </a>
                    </li>
                    <li>
                      <a
                        href="/resources"
                        className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                      >
                        All Resources
                      </a>
                    </li>
                  </div>
                </ul>
              )}
            </li>
          </ul>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/book-a-demo"
              className="font-monospace btn glitch bg-[#00f0ff] px-6 py-2.5 text-base font-semibold leading-7 text-[#041342] shadow-[0_0_10px_#00f0ff]"
            >
              BOOK A DEMO
            </a>
          </div>
        </nav>

        {/* Mobile component */}
        {openMobileMenu && (
          <div className="lg:hidden" role="dialog">
            {/*  Background backdrop, show/hide based on slide-over state. */}
            <div
              className="fixed inset-0 z-20 bg-white/15 backdrop-blur-sm"
              onClick={() => setOpenMobileMenu(false)}
            ></div>
            {/* Mobile menu */}
            <div className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-gradient-to-br from-[#0a022d] via-[#150423] to-[#030207] px-6 py-6 text-white sm:max-w-sm">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Zorus</span>
                  <img
                    className="h-10 w-auto"
                    src={LogoDarkMode}
                    alt="Zorus logo"
                    loading="eager"
                  />
                </a>
                {/*  Close button */}
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-[#B5C7DD]"
                  onClick={() => setOpenMobileMenu(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-5 w-5 text-[#B5C7DD]"
                    width="312"
                    height="312"
                    viewBox="0 0 312 312"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M156 133.4L23.5 0.899902L0.900024 23.4999L133.4 156L0.900024 288.5L23.5 311.1L156 178.6L288.5 311.1L311.1 288.5L178.6 156L311.1 23.4999L288.5 0.899902L156 133.4Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div>
                  <ul className="text-sm font-medium">
                    <li
                      className="relative flex flex-col"
                      onClick={() => toggleDropdown("compare")}
                    >
                      <div className="flex cursor-pointer items-center space-x-2.5">
                        <p className="font-monospace block rounded-lg py-2.5 text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]">
                          Compare
                        </p>
                        <button className="shrink-0 p-1">
                          <span className="sr-only">
                            Show submenu for "Compare products"
                          </span>
                          <svg
                            className="h-3 w-3 fill-[#00f0ff]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                          >
                            <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
                          </svg>
                        </button>
                      </div>
                      {/* Drodown menu Compare */}
                      {openDropdown === "compare" && (
                        <ul className="rounded-lg bg-gradient-to-b from-[#05B4F4] to-[#660DAB] p-px shadow-xl transition-all duration-300">
                          <div className="dropdown-nav-bg space-y-6 overflow-hidden rounded-lg p-8">
                            <li>
                              <a
                                href="/zorus-vs-cisco-umbrella"
                                className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                              >
                                Cisco Umbrella
                              </a>
                            </li>
                            <li>
                              <a
                                href="/zorus-vs-dnsfilter"
                                className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                              >
                                DNSFilter
                              </a>
                            </li>
                            <li>
                              <a
                                href="/zorus-vs-webroot"
                                className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                              >
                                WebRoot DNS
                              </a>
                            </li>
                            <li>
                              <a
                                href="/zorus-vs-webtitan"
                                className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                              >
                                WebTitan
                              </a>
                            </li>
                            <li>
                              <a
                                href="/zorus-vs-competitors"
                                className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                              >
                                Compare All
                              </a>
                            </li>
                          </div>
                        </ul>
                      )}
                    </li>
                    <li>
                      <a
                        className="font-monospace block rounded-lg py-2.5 font-semibold uppercase text-white"
                        href="/about"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-monospace block rounded-lg py-2.5 font-semibold uppercase text-white"
                        href="/referrals"
                      >
                        Referrals
                      </a>
                    </li>
                    <li
                      className="relative flex flex-col"
                      onClick={() => toggleDropdown("resources")}
                    >
                      <div className="flex items-center space-x-2.5">
                        <p className="font-monospace block rounded-lg py-2.5 text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]">
                          Resources
                        </p>
                        <button className="shrink-0 p-1">
                          <span className="sr-only">
                            Show submenu for "Compare products"
                          </span>
                          <svg
                            className="h-3 w-3 fill-[#00f0ff]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                          >
                            <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
                          </svg>
                        </button>
                      </div>
                      {/* Drodown menu Resources */}
                      {openDropdown === "resources" && (
                        <ul className="rounded-lg bg-gradient-to-b from-[#05B4F4] to-[#660DAB] p-px shadow-xl transition-all duration-300">
                          <div className="dropdown-nav-bg relative z-20 space-y-6 overflow-hidden rounded-lg p-8">
                            <li>
                              <a
                                href="/blog"
                                className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                              >
                                Blog
                              </a>
                            </li>
                            <li>
                              <a
                                href="/webinars"
                                className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                              >
                                Webinars
                              </a>
                            </li>
                            <li>
                              <a
                                href="/events"
                                className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                              >
                                Events
                              </a>
                            </li>
                            <li>
                              <a
                                href="/between-two-keyboards"
                                className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                              >
                                Between Two Keyboards
                              </a>
                            </li>
                            <li>
                              <a
                                href="/resources"
                                className="font-monospace text-base font-semibold uppercase text-white transition duration-300 ease-in-out hover:text-[#00f0ff]"
                              >
                                All Resources
                              </a>
                            </li>
                          </div>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <div className="mt-3 border-t border-white/10 pt-7">
                    <a
                      href="/book-a-demo"
                      className="font-monospace btn glitch block w-full border-2 border-[#00f0ff] px-6 py-2.5 text-center text-base font-semibold leading-7 text-[#00f0ff] shadow-[0_0_10px_#00f0ff]"
                    >
                      BOOK A DEMO
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NavbarLightMode;
