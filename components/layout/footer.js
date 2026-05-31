import Link from "next/link";
export default function Footer() {
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
  );
}
