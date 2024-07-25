import "@/styles/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "../navigation";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer>
      <div className="column-container section__container">
        <div className="column">
          <Image id="Logo" src="/logo.svg" alt="logo" width={0} height={0} />
          <a href="https://maps.app.goo.gl/qy7BD4LF6tcTuQHi6">
            <PlaceIcon />
            <p> 8 DA1-2, Mỹ Phước, Bến Cát, Bình Dương</p>
          </a>
          <a>
            <LocalPhoneIcon />
            <p>085-677-9886</p>
          </a>
          <a href="https://facebook.com/chaydieuthien">
            <FacebookIcon />
            <p> https://facebook.com/chaydieuthien</p>
          </a>
        </div>

        <div className="column">
          <p className="body-md footer-nav-title" id="directional">
            {t("general.directional")}
          </p>

          <p>
            {" "}
            <Link href="/">{t("general.home")}</Link>
          </p>
          <p>
            {" "}
            <Link href="/about">{t("general.aboutUs")}</Link>
          </p>
          <p>
            {" "}
            <Link href="/menu">{t("general.menu")}</Link>
          </p>
          <p>
            {" "}
            <Link href="/order">{t("general.order")}</Link>
          </p>
          <p>
            {" "}
            <Link href="/contact">{t("general.contact")}</Link>
          </p>
        </div>
        <div className="column">
          <div className="video-responsive">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100090392966682%2Fvideos%2F1384123925702576%2F&show_text=false&width=560&t=0"
              width="410"
              height="240"
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
      <p id="copyright" className="cream-text">
        {t("general.copyright")}
      </p>
    </footer>
  );
};

export default Footer;
