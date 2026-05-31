import Link from "next/link";

export default function Header() {
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
  return (
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
  );
}
