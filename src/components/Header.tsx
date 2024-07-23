"use client";
import "animate.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Link } from "../navigation";
import LocalSwitcher from "./LocalSwitcher";

type HeaderProps = {
  scrollTop?: number;
};

const Header = ({ scrollTop }: HeaderProps) => {
  const t = useTranslations();
  const [visible, setVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    handleScroll();
  }, [scrollTop]);

  const handleScroll = () => {
    const currentScrollPos = scrollTop!;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
    setPrevScrollPos(currentScrollPos);
    // Clear the timer if it exists
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }

    // Set a timer to show the header after 500ms when scrolling up
    if (prevScrollPos > currentScrollPos) {
      timerRef.current = window.setTimeout(() => {
        setVisible(true);
      }, 500);
    }
  };

  return (
    <div
      className={`animate__animated header__container section__container cream-bg ${scrollTop! > 5 ? "bg-white" : "bg-transparent"
        } ${visible ? "animate__fadeInDown" : "animate__fadeOutUp"}`}
      style={{
        opacity: visible ? 1 : 0,
      }}
    >
      <header>
        {/* Logo */}
        <div className="logo__wrapper">
          <a href="/">
            <img id="Logo" src="/images/logo.svg" alt="logo" />
          </a>
        </div>

        {/* Navigation */}
        <div
          className="header__nav"

        >
          <Link href="/">{t("general.home")}</Link>
          <Link href="/about">{t("general.aboutUs")}</Link>
          <Link href="/menu">{t("general.menu")}</Link>
          <Link href="/order">{t("general.order")}</Link>
          <Link href="/contact">{t("general.contact")}</Link>
        </div>
        {/* Navigation */}
        <div
          className="header__nav"
          style={{
            display: "flex",
            gap: "24px",
            color: "#31363F",
            fontSize: "18px",
          }}
        >
          <Link href="/">{t("general.home")}</Link>
          <Link href="/about">{t("general.aboutUs")}</Link>
          <Link href="/menu">{t("general.menu")}</Link>
          <Link href="/order">{t("general.order")}</Link>
          <Link href="/contact">{t("general.contact")}</Link>
        </div>

        {/* Language & Order */}
        <div className="header__language_order">
          {/* Language */}
          <LocalSwitcher />

          {/* Order */}
          <Link href="/order" className="header__button--order">
            {t("general.order")}
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
