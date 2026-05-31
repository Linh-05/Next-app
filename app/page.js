import { Inter } from "next/font/google";
import Image from "next/image";
import "./page.css";
import Link from "next/link";
import BannerSection from "@/components/home/BannerSection";
import ClientSection from "@/components/home/ClientSection";
import ManageSection from "@/components/home/ManageSection";
import UnlockSection from "@/components/home/UnlockSection";
import AchivementSection from "@/components/home/AchivementSection";
import Unlock2Section from "@/components/home/Unlock2Section";
import CaringSection from "@/components/home/CaringSection";
import SuscipitSection from "@/components/home/SuscipitSection";
const inter = Inter({
  variable: "font-inter",
});

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

export default async function Home() {
  await getData();
  //  throw new Error("Website crashed!");
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
    <>
      <html lang="en">
        <BannerSection />
        <ClientSection our={our} />
        <ManageSection systems={systems} />
        <UnlockSection />
        <AchivementSection achievement={achievement} />
        <Unlock2Section />
        <CaringSection caring={caring} />
        <SuscipitSection />
      </html>
    </>
  );
}
