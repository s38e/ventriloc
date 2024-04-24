import React, { useEffect, useState } from "react";
import styles from "./styles/NavBar.module.css";
import { useTranslations } from "next-intl";
// import Link from "next/link";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import Image from "next/image";
import menuNavServices_Img_1 from "@/public/menuNavServices_Img_1.svg";
import menuNavServices_Img_2 from "@/public/menuNavServices_Img_2.svg";
import menuNavServices_Img_3 from "@/public/menuNavServices_Img_3.svg";
const locales = ["en", "fr"];
const { Link, useRouter, usePathname, redirect } =
  createSharedPathnamesNavigation({ locales });

function NavBar() {
  const t = useTranslations("NavBar");
  useEffect(() => {
    // ------------------- heightMenuServices ------------------- //
    var menuServices = document.querySelector(
      `.${styles.menuServices} .${styles.body}`
    );
    var backSection = document.querySelector(`.${styles.backSection}`);

    var heightMenuServices = menuServices.offsetHeight;
    backSection.style.height = 80 + heightMenuServices + "px";
  });
  // ------------------- State MenuServices ------------------- //
  const [menuServicesActive, setMenuServices] = useState(false);
  // ------------------- State MenuVentriloc ------------------- //
  const [menuVentrilocActive, setMenuVentriloc] = useState(false);
  // ------------------- State MenuContact ------------------- //
  const [menuContactActive, setMenuContact] = useState(false);
  // تعيين دالة تفعيل العناصر الأخرى عند تفعيل عنصر جديد
  const activateMenu = (menu) => {
    if (menu === "menuServices") {
      setMenuServices(!menuServicesActive); // تغيير حالة القائمة إلى الحالة المعاكسة
      setMenuVentriloc(false); // إغلاق القوائم الأخرى
      setMenuContact(false);
    } else if (menu === "menuVentriloc") {
      setMenuVentriloc(!menuVentrilocActive); // تغيير حالة القائمة إلى الحالة المعاكسة
      setMenuServices(false); // إغلاق القوائم الأخرى
      setMenuContact(false);
    } else if (menu === "menuContact") {
      setMenuContact(!menuContactActive); // تغيير حالة القائمة إلى الحالة المعاكسة
      setMenuServices(false); // إغلاق القوائم الأخرى
      setMenuVentriloc(false);
    }
  };
  return (
    <>
      <nav className={styles.NavBar}>
        <div className={styles.logo}>
          <svg
            width="231"
            height="41"
            viewBox="0 0 231 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M4.97098 11.7094L13.1789 35.888C13.3986 36.448 13.5311 37.0381 13.5719 37.638C13.5719 37.9719 13.5719 38.3173 14.0228 38.3173C14.4736 38.3173 14.4736 37.9719 14.4736 37.638C14.5144 37.0381 14.647 36.448 14.8667 35.888L23.0746 11.7094H28.0455L17.6412 40.4934H10.4044L0 11.7094H4.97098Z"
                fill="currentColor"
              ></path>
              <path
                d="M54.7046 27.2527H32.9942C33.2138 32.3187 36.6126 36.9357 42.3813 36.9357C46.5083 36.9357 48.5429 34.3451 49.5603 31.0868H54.3116C53.7909 33.894 52.2905 36.4275 50.0756 38.2394C47.8607 40.0514 45.0739 41.0251 42.2078 40.9885C33.3873 40.9885 28.5781 34.0803 28.5781 26.1244C28.5781 17.2819 34.0578 11.2603 42.0922 11.2603C48.3117 11.2603 54.8087 15.3707 54.8087 25.2839C54.8113 25.9416 54.7766 26.5989 54.7046 27.2527ZM33.2138 23.649H50.2886C49.8955 18.3527 46.9592 15.0828 42.4275 15.0828C36.2658 15.0828 33.8381 18.9169 33.2138 23.649Z"
                fill="currentColor"
              ></path>
              <path
                d="M84.6682 23.4187V40.5395H80.1481V23.649C80.1481 16.9481 77.0962 15.0829 73.0731 15.0829C68.6686 15.0829 63.8248 19.3084 63.8248 26.182V40.5395H59.3047V11.7554H63.8248V14.1733C63.8196 15.2307 63.6279 16.2791 63.2583 17.2704C63.0965 17.7195 62.8075 18.2261 63.2583 18.4218C63.7092 18.6175 63.8248 18.203 63.8826 18.0303C64.7407 16.0808 66.135 14.4128 67.9044 13.219C69.6739 12.0251 71.7463 11.354 73.8824 11.2834C80.599 11.2834 84.6682 14.9792 84.6682 23.4187Z"
                fill="currentColor"
              ></path>
              <path
                d="M98.2393 15.5434V32.4339C98.2393 35.7037 98.9213 36.7169 102.089 36.7169H106.378V40.5395H102.089C96.089 40.5395 93.7192 38.8009 93.7192 32.1V15.5434H89.1875V11.7093H93.7192V3.64981H98.2393V11.7093H106.332V15.5434H98.2393Z"
                fill="currentColor"
              ></path>
              <path
                d="M115.499 17.9037C117.418 13.2291 118.967 11.2603 126.239 11.2603V15.8658C117.811 15.3016 115.384 18.2836 115.384 25.8366V40.5279H110.875V11.7439H115.395V14.0466C115.406 15.1954 115.214 16.3372 114.829 17.4201C114.655 17.8691 114.493 18.3757 114.944 18.4333C115.395 18.4909 115.43 18.1915 115.499 17.9037Z"
                fill="currentColor"
              ></path>
              <path
                d="M130.586 0H135.557V5.84892H130.586V0ZM130.806 11.7093H135.337V40.4934H130.806V11.7093Z"
                fill="currentColor"
              ></path>
              <path
                d="M146.645 0V40.5395H142.09V0H146.645Z"
                fill="currentColor"
              ></path>
              <path
                d="M178.32 26.1244C178.32 34.2875 173.221 40.9885 164.748 40.9885C156.274 40.9885 151.176 34.2875 151.176 26.1244C151.176 17.9612 156.262 11.2833 164.748 11.2833C173.233 11.2833 178.32 17.9612 178.32 26.1244ZM173.788 26.1244C173.788 20.1603 170.459 15.3131 164.748 15.3131C159.037 15.3131 155.696 20.1603 155.696 26.1244C155.696 32.0884 159.037 36.9357 164.748 36.9357C170.459 36.9357 173.788 32.1 173.788 26.1244Z"
                fill="currentColor"
              ></path>
              <path
                d="M195.441 11.2834C203.025 11.2834 207.487 16.5796 207.938 22.0946H203.534C203.345 20.157 202.408 18.3683 200.919 17.1069C199.43 15.8455 197.507 15.2105 195.557 15.3362C189.106 15.3362 186.228 20.287 186.228 26.1474C186.228 32.0079 189.106 36.9587 195.557 36.9587C197.507 37.0844 199.43 36.4493 200.919 35.188C202.408 33.9266 203.345 32.1378 203.534 30.2002H207.984C207.533 35.7268 203.117 41.0115 195.488 41.0115C186.944 41.0115 181.742 34.3106 181.742 26.1474C181.742 17.9843 186.736 11.2834 195.441 11.2834Z"
                fill="currentColor"
              ></path>
              <path
                d="M222.006 15.7621C221.728 15.624 221.393 15.4858 221.393 15.0829C221.393 14.6799 221.728 14.5532 222.006 14.4151C225.347 13.0449 227.659 11.8245 229.104 9.5448C230.399 7.50689 231 4.61696 231 0H224.757C225.035 4.21399 224.653 7.32267 223.52 9.5448C222.283 11.9972 220.133 13.3903 217 14.0581V16.1191C220.133 16.7869 222.283 18.18 223.52 20.6324C224.676 22.8545 225.035 25.9517 224.757 30.1772H231C231 25.5718 230.399 22.6703 229.104 20.6324C227.636 18.3527 225.324 17.1323 222.006 15.7621Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </div>
        <div className={styles.links}>
          <button
            className={`${styles.link} ${
              menuServicesActive ? `${styles.active}` : ""
            }`}
            onClick={() => activateMenu("menuServices")}
          >
            services
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor"></path>
            </svg>
          </button>
          <button
            className={`${styles.link} ${
              menuVentrilocActive ? `${styles.active}` : ""
            }`}
            onClick={() => activateMenu("menuVentriloc")}
          >
            ventriloc
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor"></path>
            </svg>
          </button>
          <Link className={styles.link} href="">
            contact
          </Link>
          <Link href="/" className={styles.link} locale="fr">
            fr
          </Link>
        </div>
        <button
          className={`${styles.contactButton} ${
            menuContactActive ? `${styles.active}` : ""
          }`}
          onClick={() => activateMenu("menuContact")}
        >
          <span>Contact us</span>
          <span>Close</span>
        </button>
      </nav>
      <menu
        className={`${styles.menuServices} ${
          menuServicesActive ? `${styles.active}` : ""
        }`}
      >
        <div className={styles.backSection}>
          <figure className={styles.figureSvg}>
            <svg
              width="243"
              height="526"
              viewBox="0 0 243 526"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M86.8975 274.745C81.9629 272.26 76.1857 269.774 76.1857 262.92C76.1857 256.065 81.9629 253.58 86.8975 251.095C144.829 227.404 184.908 206.079 210.022 166.354C232.529 130.799 243 80.5315 243 0H134.679C139.614 73.5566 132.874 127.552 113.296 166.354C91.7519 209.125 54.4814 233.337 0 244.962V281.038C54.4814 292.663 91.7519 316.875 113.296 359.646C132.874 398.448 139.614 452.443 134.679 526H243C243 445.469 232.529 395.201 210.022 359.646C184.908 319.56 144.829 298.235 86.8975 274.745Z"
                fill="currentColor"
              ></path>
            </svg>
          </figure>
          <div></div>
          <div className={styles.contact}>
            <h3>Let&apos;s work together</h3>
            <button>Make an appointment</button>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.card}>
            <h3 className={styles.headText}>
              <span>Data</span> Integration
            </h3>
            <Image src={menuNavServices_Img_1} alt="Data Integration" />
          </div>
          <div className={styles.card}>
            <h3 className={styles.headText}>
              <span>
                <span>Data</span> Visualization
              </span>
              <span>Power BI Experts</span>
            </h3>
            <Image src={menuNavServices_Img_2} alt="Data Visualization" />
          </div>
          <div className={styles.card}>
            <h3 className={styles.headText}>
              <span>Analytical</span> Alignment
            </h3>
            <Image src={menuNavServices_Img_3} alt="Analytical Alignment" />
          </div>
        </div>
      </menu>
      <menu
        className={`${styles.menuVentriloc} ${
          menuVentrilocActive ? `${styles.active}` : ""
        }`}
      >
        <div className={styles.body}>
          <div className={styles.links}>
            <Link href="" className={styles.link}>
              <span>About</span>
            </Link>
            <Link href="" className={styles.link}>
              <span>Clients</span>
            </Link>
            <Link href="" className={styles.link}>
              <span>Team</span>
            </Link>
            <Link href="" className={styles.link}>
              <span>Careers</span>
            </Link>
            <Link href="" className={styles.link}>
              <span>Blog</span>
            </Link>
          </div>
        </div>
      </menu>
      <menu
        className={`${styles.menuContact} ${
          menuContactActive ? `${styles.active}` : ""
        }`}
      >
        <div className={styles.body}>
          <div className={styles.head}>
            <div className={styles.left}>
              <p>Contact form</p>
              <p>
                Every good partnership starts with coffee.
                <br /> Now lets make an appointment.
              </p>
            </div>
            <div className={styles.right}>
              <Link
                className={styles.link}
                href="https://www.linkedin.com/company/ventriloc"
              >
                LinkedIn
              </Link>
              <Link className={styles.link} href="mailto:info@ventriloc.ca">
                info@ventriloc.ca
              </Link>
              <Link className={styles.link} href="tel:18193453223">
                819-345-3223
              </Link>
            </div>
          </div>
          <form className={styles.form}>
            <div className={styles.top}>
              <div className={styles.left}>
                <input type="text" placeholder="Name*" />
                <input type="email" placeholder="E-mail" />
                <input type="text" placeholder="Company" />
              </div>
              <div className={styles.right}>
                <input type="text" placeholder="First name*" />
                <input type="tel" placeholder="Phone" aria-invalid="false" />
                <input type="text" placeholder="I am looking for help for *" />
              </div>
            </div>
            <input type="text" placeholder="Message" />
            <button className={styles.btn}>Send</button>
          </form>
        </div>
      </menu>
    </>
  );
}

export default NavBar;
