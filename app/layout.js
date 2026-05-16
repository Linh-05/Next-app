import { Geist, Geist_Mono } from "next/font/google";
import "./page.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  const header = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Services",
      url: "/services",
    },
    {
      id: 3,
      title: "Features",
      url: "/features",
    },
    {
      id: 4,
      title: "Product",
      url: "/product",
    },
    {
      id: 5,
      title: "Testimonial",
      url: "/testimonial",
    },
    {
      id: 6,
      title: "FAQ",
      url: "/testimonial/fqa",
    },
  ];
  const socialIcons = [
    {
      id: 1,
      icon: "/images/footer_logo1.png",
      name: "instagram",
    },
    {
      id: 2,
      icon: "/images/footer_logo2.png",
      name: "dribbble",
    },
    {
      id: 3,
      icon: "/images/footer_logo3.png",
      name: "twitter",
    },
    {
      id: 4,
      icon: "/images/footer_logo4.png",
      name: "youtube",
    },
  ];
  const company = [
    {
      id: 1,
      title: "About us",
      url: "/about",
    },
    {
      id: 2,
      title: "Blog",
      url: "/about/blog",
    },
    {
      id: 3,
      title: "Contact us",
      url: "/about/blog/contact",
    },
    {
      id: 4,
      title: "Pricing",
      url: "/about/blog/contact/pricing",
    },
    {
      id: 5,
      title: "Testimonials",
      url: "/about/blog/contact/pricing/testimonials",
    },
  ];
  const support = [
    {
      id: 1,
      title: "Help center",
      url: "/help",
    },
    {
      id: 2,
      title: "Terms of service",
      url: "/help/terms",
    },
    {
      id: 3,
      title: "Legal",
      url: "/help/terms/legal",
    },
    {
      id: 4,
      title: "Privacy policy",
      url: "/help/terms/legal/privacy",
    },
    {
      id: 5,
      title: "Status",
      url: "/help/terms/legal/privacy/status",
    },
  ];
  return (
    <html lang="en">
      <body>
        <header>
          <div className="header-inner">
            <a className="logo">
              <img src="/images/logo_nexcent1.png" />
            </a>
            <nav>
              {header.map(function (value) {
                return (
                  <Link key={value.id} href={value.url}>
                    {value.title}
                  </Link>
                );
              })}
            </nav>
            <div>
              <a className="login-link">Login</a>
              <a className="green-btn">Signup</a>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-left">
              <img
                src="/images/logo_nexcent2.png"
                alt="Nexcent logo"
                className="footer-logo"
              />

              <p>
                Copyright © 2020 Nexcent ltd.
                <br />
                All rights reserved
              </p>

              <div className="icon-mxh">
                {socialIcons.map((item) => {
                  return <img key={item.id} src={item.icon} alt={item.name} />;
                })}
              </div>
            </div>

            <div className="footer-col">
              <h3>Company</h3>
              <ul>
                {company.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="footer-col">
              <h3>Support</h3>
              <ul>
                {support.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="footer-col">
              <h3>Stay up to date</h3>

              <div className="email-box">
                <input type="email" placeholder="Your email address" />
                <button>➤</button>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
