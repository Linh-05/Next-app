import Image from "next/image";
import "./page.css";
import Link from "next/link";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

export default async function Home() {
  await getData();
   throw new Error("Website crashed!");
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
  const our = [
    {
      id: 1,
      icon: "/images/logo1.png",
    },
    {
      id: 2,
      icon: "/images/logo2.png",
    },
    {
      id: 3,
      icon: "/images/logo3.png",
    },
    {
      id: 4,
      icon: "/images/logo4.png",
    },
    {
      id: 5,
      icon: "/images/logo5.png",
    },
    {
      id: 6,
      icon: "/images/logo6.png",
    },
    {
      id: 7,
      icon: "/images/logo3.png",
    },
  ];
  const systems = [
    {
      id: 1,
      title: "Membership  Organisations",
      subtitle:
        "Our membership management software provides full automation of membership renewals and payments",
      icon: "/images/member_logo.png",
    },
    {
      id: 2,
      title: "Membership  Organisations",
      subtitle:
        "Our membership management software provides full automation of membership renewals and payments",
      icon: "/images/national_logo.png",
    },
    {
      id: 3,
      title: "Membership  Organisations",
      subtitle:
        "Our membership management software provides full automation of membership renewals and payments",
      icon: "/images/clubs_logo.png",
    },
  ];
  const achievement = [
    {
      id: 1,
      icon: "/images/achievement_logo1.png",
      title: "2,245,341",
      subtitle: "Members",
    },
    {
      id: 2,
      icon: "/images/achievement_logo2.png",
      title: "46,328",
      subtitle: "Clubs",
    },
    {
      id: 3,
      icon: "/images/achievement_logo3.png",
      title: "828,867",
      subtitle: "Event Bookings",
    },
    {
      id: 4,
      icon: "/images/achievement_logo4.png",
      title: "1,926,436",
      subtitle: "Payments",
    },
  ];
  const caring = [
    {
      id: 1,
      icon: "/images/caring_logo1.png",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      subtitle: "Readmore →",
    },
    {
      id: 2,
      icon: "/images/caring_logo2.png",
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      subtitle: "Readmore →",
    },
    {
      id: 3,
      icon: "/images/caring_logo3.png",
      title: "Revamping the Membership Model with Triathlon Australia",
      subtitle: "Readmore →",
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
      url:"/about"
    },
    {
      id: 2,
      title: "Blog",
      url:"/about/blog"
    },
    {
      id: 3,
      title: "Contact us",
      url:"/about/blog/contact"
    },
    {
      id: 4,
      title: "Pricing",
      url:"/about/blog/contact/pricing"
    },
    {
      id: 5,
      title: "Testimonials",
      url:"/about/blog/contact/pricing/testimonials"
    },
  ];
  const support = [
    {
      id: 1,
      title: "Help center",
      url:"/help"
    },
    {
      id: 2,
      title: "Terms of service",
      url:"/help/terms"
    },
    {
      id: 3,
      title: "Legal",
      url:"/help/terms/legal"
    },
    {
      id: 4,
      title: "Privacy policy",
      url:"/help/terms/legal/privacy"
    },
    {
      id: 5,
      title: "Status",
      url:"/help/terms/legal/privacy/status"
    },
  ];
  return (
    <>
      {/* <header>
        <div className="header-inner">
          <a className="logo">
            <img src="/images/logo_nexcent1.png" />
          </a>
          <nav>
            {header.map(function (value) {
              return <Link key={value.id} href={value.url}>{value.title}</Link>;
            })}
          </nav>
          <div>
            <a className="login-link">Login</a>
            <a className="green-btn">Signup</a>
          </div>
        </div>
      </header> */}

      <section className="banner">
        <div className="lessons">
          <h1>
            Lessons and insights <br />
            <span>from 8 years</span>
          </h1>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
          <button>Register</button>
        </div>
        <div className="logo-lesson">
          <img src="./images/logo_lesson.png" alt="" />
        </div>
      </section>

      <section className="client">
        <h1 className="fontour">Our Clients</h1>
        <p className="fontour-2">
          {" "}
          We have been working with some Fortune 500+ clients
        </p>
        <div className="client-logos">
          {our.map(function (item) {
            return <img key={item.id} src={item.icon} />;
          })}
        </div>
      </section>

      <section className="manage">
        <div className="fontmanage">
          <h1>
            Manage your entire community <br />
            in a single system
          </h1>

          <p>Who is Nextcent suitable for?</p>
        </div>

        <div className="cards">
          {systems.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="icon">
                  <img src={item.icon} alt={item.title} />
                </div>

                <h1>{item.title}</h1>

                <p>{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="unlock">
        <div className="logo-lesson">
          <img src="/images/unlock_logo.png" alt="" />
        </div>
        <div className="lessons">
          <h1>The unseen of spending three years at Pixelgrade</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button>Learn More</button>
        </div>
      </section>
      <section className="achievement">
        <div className="starts">
          <div className="left">
            <h1>
              Helping a local <br />
              <span>business reinvent itself</span>
            </h1>
            <p>We reached here with our hard work and dedication</p>
          </div>
          <div className="right">
            {achievement.map((item) => {
              return (
                <div className="icon-achi" key={item.id}>
                  <img src={item.icon} alt="" />

                  <div className="oneside">
                    <h1>{item.title}</h1>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="unlock">
        <div className="logo-lesson">
          <img src="/images/customer_logo.png" alt="" />
        </div>
        <div className="lessons">
          <h1>
            How to design your site footer like <br />
            we did
          </h1>
          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button>Learn More</button>
        </div>
      </section>
      <section className="caring">
        <h1>Caring is the new marketing</h1>

        <p>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>

        <div className="caring-content">
          {caring.map((item) => {
            return (
              <div className="caring-container" key={item.id}>
                <img src={item.icon} alt={item.title} />

                <div className="creating">
                  <h3>{item.title}</h3>

                  <p className="selec">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="suscipit">
        <div className="suscipit-content">
          <h1>
            Pellentesque suscipit <br />
            fringilla libero eu.
          </h1>
          <button>Get a Demo</button>
        </div>
      </section>
      {/* <footer className="footer">
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
                return <li key={item.id}>{item.title}</li>;
              })}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Support</h3>
            <ul>
              {support.map((item) => {
                return <li key={item.id}>{item.title}</li>;
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
      </footer> */}
    </>
  );
}
