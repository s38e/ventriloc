"use client";
import styles from "../page.module.css";
import Image from "next/image";
import NavBar from "./components/NavBar";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const locales = ["en", "fr"];
const { Link, useRouter, usePathname, redirect } =
  createSharedPathnamesNavigation({ locales });

// export async function generateMetadata() {
//   const nameInTap = await getTranslations("NameInTap");
//   return {
//     title: nameInTap("Name"),
//   };
// }

export default function Home() {
  useEffect(() => {
    // ----------- Smooth Scroll ----------- //
    const lenis = new Lenis({
      duration: 1.2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    // ----------- Smooth Scroll ----------- //
    gsap.to(`.${styles.vid}`, {
      // scale: 1.3,
      scrollTrigger: {
        trigger: `.${styles.section_2}`,
        start: "top 33%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
      width: "1000px",
    });
    // ----------- Smooth Scroll ----------- //
    gsap.to(`.page_section_2__0PJYq svg:nth-child(2)`, {
      scrollTrigger: {
        trigger: `.${styles.section_2}`,
        start: "top 33%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
      y: "12rem",
    });
    // ----------- Smooth Scroll ----------- //
    var Span_1 = document.querySelector(`.${styles.span1}`);
    var Span_2 = document.querySelector(`.${styles.span2}`);

    var WidthSpan_1 = Span_1.getBoundingClientRect().width;
    var WidthSpan_2 = Span_2.getBoundingClientRect().width;
  });
  const t = useTranslations("Index");
  return (
    <>
      <NavBar />
      <page className={styles.page}>
        <section className={`${styles.section_1} ${styles.section}`}>
          <div className={styles.head}>
            <h1>
              <span>Together</span>, we
              <br />
              turn <span>data</span> into
              <span> value</span>.
            </h1>
            <Link href="" className={styles.btn}>
              <p>Let’s work together</p>
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
            </Link>
          </div>
          <div className={styles.scaleGif}></div>
        </section>
        <section className={`${styles.section_2} ${styles.section}`}>
          <div className={styles.body}>
            <p className={styles.text}>
              Ventriloc develops innovative data
              <br />
              solutions for humans in charge of
              <br />
              making informed decisions.
            </p>
            <div className={styles.video}>
              <div className={styles.vid}></div>
            </div>
          </div>
          <svg
            className={styles.svgSection2}
            width="1440"
            height="709"
            viewBox="0 0 1440 709"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.000154656 4.57922C212.022 7.36982 347.714 37.5073 444.794 98.9625C558.954 171.064 620.07 286.424 688.681 453.122C695.6 466.965 701.942 483.693 722.122 483.693C742.302 483.693 749.221 466.965 756.14 453.122C824.751 287.578 885.867 172.217 1000.03 98.9627C1096.36 37.9829 1231.21 7.83826 1440 4.64919"
              stroke="#863B32"
              vector-effect="non-scaling-stroke"
            ></path>
            <path
              d="M7.26476e-05 313.913C194.266 304.127 339.431 324.037 444.794 377.56C554.014 432.449 621.279 523.38 658.35 652.787C666.639 681.72 692.314 702.881 722.411 702.881V702.881C752.507 702.881 778.182 681.72 786.471 652.787C823.543 523.38 890.808 432.449 1000.03 377.56C1104.53 323.389 1247.69 304.321 1440 313.668"
              stroke="#863B32"
              vector-effect="non-scaling-stroke"
            ></path>
            <path
              d="M-0.000154656 4.57922C212.022 7.36982 347.714 37.5073 444.794 98.9625C558.954 171.064 620.07 286.424 688.681 453.122C695.6 466.965 701.942 483.693 722.122 483.693C742.302 483.693 749.221 466.965 756.14 453.122C824.751 287.578 885.867 172.217 1000.03 98.9627C1096.36 37.9829 1231.21 7.83826 1440 4.64919"
              stroke="#E96A35"
              stroke-width="3"
              vector-effect="non-scaling-stroke"
            ></path>
            <path
              d="M7.26476e-05 313.913C194.266 304.127 339.431 324.037 444.794 377.56C554.014 432.449 621.279 523.38 658.35 652.787C666.639 681.72 692.314 702.881 722.411 702.881V702.881C752.507 702.881 778.182 681.72 786.471 652.787C823.543 523.38 890.808 432.449 1000.03 377.56C1104.53 323.389 1247.69 304.321 1440 313.668"
              stroke="#E96A35"
              stroke-width="3"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
          <svg
            className={styles.svgSection2}
            width="1440"
            height="709"
            viewBox="0 0 1440 709"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.000154656 4.57922C212.022 7.36982 347.714 37.5073 444.794 98.9625C558.954 171.064 620.07 286.424 688.681 453.122C695.6 466.965 701.942 483.693 722.122 483.693C742.302 483.693 749.221 466.965 756.14 453.122C824.751 287.578 885.867 172.217 1000.03 98.9627C1096.36 37.9829 1231.21 7.83826 1440 4.64919"
              stroke="#863B32"
              vector-effect="non-scaling-stroke"
            ></path>
            <path
              d="M7.26476e-05 313.913C194.266 304.127 339.431 324.037 444.794 377.56C554.014 432.449 621.279 523.38 658.35 652.787C666.639 681.72 692.314 702.881 722.411 702.881V702.881C752.507 702.881 778.182 681.72 786.471 652.787C823.543 523.38 890.808 432.449 1000.03 377.56C1104.53 323.389 1247.69 304.321 1440 313.668"
              stroke="#863B32"
              vector-effect="non-scaling-stroke"
            ></path>
            <path
              d="M-0.000154656 4.57922C212.022 7.36982 347.714 37.5073 444.794 98.9625C558.954 171.064 620.07 286.424 688.681 453.122C695.6 466.965 701.942 483.693 722.122 483.693C742.302 483.693 749.221 466.965 756.14 453.122C824.751 287.578 885.867 172.217 1000.03 98.9627C1096.36 37.9829 1231.21 7.83826 1440 4.64919"
              stroke="#E96A35"
              stroke-width="3"
              vector-effect="non-scaling-stroke"
            ></path>
            <path
              d="M7.26476e-05 313.913C194.266 304.127 339.431 324.037 444.794 377.56C554.014 432.449 621.279 523.38 658.35 652.787C666.639 681.72 692.314 702.881 722.411 702.881V702.881C752.507 702.881 778.182 681.72 786.471 652.787C823.543 523.38 890.808 432.449 1000.03 377.56C1104.53 323.389 1247.69 304.321 1440 313.668"
              stroke="#E96A35"
              stroke-width="3"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
        </section>
        <section className={`${styles.section_3} ${styles.section}`}>
          <div className={styles.head}>
            <p>Services</p>
            <h2>
              <span className={styles.span1}>We make the</span>
              <span className={styles.span2}>
                complex <span>simple</span>.
              </span>
              <svg
                class="d-none d-lg-block position-absolute t-0 l-0 w-100 h-100"
                width="1328"
                height="166"
                viewBox="0 0 1328 166"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M715 83H42.5C20.1325 83 2 101.132 2 123.5V123.5C2 145.868 20.1325 164 42.5 164H715"
                  stroke="#863B32"
                  vector-effect="non-scaling-stroke"
                ></path>
                <path
                  d="M712.5 83L1285.5 83C1307.87 83 1326 64.8675 1326 42.5V42.5C1326 20.1325 1307.87 2.00005 1285.5 2.00005L712.5 2.00005"
                  stroke="#863B32"
                  vector-effect="non-scaling-stroke"
                ></path>
                <path
                  d="M715 164H42.5C20.1325 164 2 145.868 2 123.5C2 101.132 20.1325 83 42.5 83H1065L1285.5 83C1307.87 83 1326 64.8675 1326 42.5C1326 20.1325 1307.87 2.00005 1285.5 2.00004H712.5"
                  stroke="#E96A35"
                  stroke-width="1"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
            </h2>
          </div>
          <div className={styles.body}>
            <div className={styles.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 300"
                width="400"
                height="300"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <clipPath id="__lottie_element_2711">
                    <rect width="400" height="300" x="0" y="0"></rect>
                  </clipPath>
                  <mask id="__lottie_element_2712" mask-type="alpha">
                    <g transform="matrix(1,0,0,1,200,150)" opacity="1">
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke="rgb(255,27,0)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d=" M-72.5,-37 C-72.5,-37 142,-37 142,-37"
                        ></path>
                      </g>
                    </g>
                  </mask>
                  <mask id="__lottie_element_2718" mask-type="alpha">
                    <g transform="matrix(1,0,0,1,200,150)" opacity="1">
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke="rgb(255,27,0)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d=" M-1,-108.5 C-1,-108.5 -1,107 -1,107"
                        ></path>
                      </g>
                    </g>
                  </mask>
                  <mask id="__lottie_element_2724" mask-type="alpha">
                    <g transform="matrix(1,0,0,1,200,150)" opacity="1">
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          stroke="url(#__lottie_element_2727)"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke-opacity="1"
                          stroke-width="1"
                          d=" M-143.5,35 C-143.5,35 70.5,35.5 70.5,35.5 C70.5,35.5 70.5,-108.25 70.5,-108.25"
                        ></path>
                      </g>
                    </g>
                  </mask>
                  <linearGradient
                    id="__lottie_element_2727"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    y1="0"
                    x2="100"
                    y2="0"
                  >
                    <stop offset="0%" stop-color="rgb(255,104,44)"></stop>
                    <stop offset="50%" stop-color="rgb(195,82,47)"></stop>
                    <stop offset="100%" stop-color="rgb(134,59,50)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_2746"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-37.12300109863281"
                    y1="37.064998626708984"
                    x2="13.956999778747559"
                    y2="-16.906999588012695"
                  >
                    <stop offset="0%" stop-color="rgb(255,104,44)"></stop>
                    <stop offset="50%" stop-color="rgb(195,82,47)"></stop>
                    <stop offset="100%" stop-color="rgb(134,59,50)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_2750"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-37.12300109863281"
                    y1="37.064998626708984"
                    x2="13.956999778747559"
                    y2="-16.906999588012695"
                  >
                    <stop offset="0%" stop-color="rgb(255,104,44)"></stop>
                    <stop offset="50%" stop-color="rgb(195,82,47)"></stop>
                    <stop offset="100%" stop-color="rgb(134,59,50)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_2754"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-37.12300109863281"
                    y1="37.064998626708984"
                    x2="13.956999778747559"
                    y2="-16.906999588012695"
                  >
                    <stop offset="0%" stop-color="rgb(255,104,44)"></stop>
                    <stop offset="50%" stop-color="rgb(195,82,47)"></stop>
                    <stop offset="100%" stop-color="rgb(134,59,50)"></stop>
                  </linearGradient>
                </defs>
                <g clip-path="url(#__lottie_element_2711)">
                  <g transform="matrix(1,0,0,1,164,220.875)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(134,59,50)"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-36,-36 C-36,-36 36,-36 36,-36 C36,-36 36,36 36,36 C36,36 -36,36 -36,36 C-36,36 -36,-36 -36,-36z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,164,149)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(134,59,50)"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-36,-36 C-36,-36 36,-36 36,-36 C36,-36 36,36 36,36 C36,36 -36,36 -36,36 C-36,36 -36,-36 -36,-36z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,235.5,149)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(134,59,50)"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-36,-36 C-36,-36 36,-36 36,-36 C36,-36 36,36 36,36 C36,36 -36,36 -36,36 C-36,36 -36,-36 -36,-36z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,235.5,77.5)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(134,59,50)"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-36,-36 C-36,-36 36,-36 36,-36 C36,-36 36,36 36,36 C36,36 -36,36 -36,36 C-36,36 -36,-36 -36,-36z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,199.5,113.5)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(233,106,53)"
                        fill-opacity="1"
                        d=" M-2.5,-2.5 C-2.5,-2.5 2.5,-2.5 2.5,-2.5 C2.5,-2.5 2.5,2.5 2.5,2.5 C2.5,2.5 -2.5,2.5 -2.5,2.5 C-2.5,2.5 -2.5,-2.5 -2.5,-2.5z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,199.5,184.5)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(233,106,53)"
                        fill-opacity="1"
                        d=" M-2.5,-2.5 C-2.5,-2.5 2.5,-2.5 2.5,-2.5 C2.5,-2.5 2.5,2.5 2.5,2.5 C2.5,2.5 -2.5,2.5 -2.5,2.5 C-2.5,2.5 -2.5,-2.5 -2.5,-2.5z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,307,77.5)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke="url(#__lottie_element_2754)"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-36,36 C-36,36 36,36 36,36 C36,-3.7639999389648438 3.765000104904175,-36 -35.999000549316406,-36 C-35.99599838256836,-36 -36,36 -36,36z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,-1,306.75,220.75)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke="url(#__lottie_element_2750)"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-36,36 C-36,36 36,36 36,36 C36,-3.7639999389648438 3.765000104904175,-36 -35.999000549316406,-36 C-35.99599838256836,-36 -36,36 -36,36z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(-1,0,0,-1,92.25,221)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke="url(#__lottie_element_2746)"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-36,36 C-36,36 36,36 36,36 C36,-3.7639999389648438 3.765000104904175,-36 -35.999000549316406,-36 C-35.99599838256836,-36 -36,36 -36,36z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,271,113.5)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(233,106,53)"
                        fill-opacity="1"
                        d=" M-2.5,-2.5 C-2.5,-2.5 2.5,-2.5 2.5,-2.5 C2.5,-2.5 2.5,2.5 2.5,2.5 C2.5,2.5 -2.5,2.5 -2.5,2.5 C-2.5,2.5 -2.5,-2.5 -2.5,-2.5z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,271,184.5)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(233,106,53)"
                        fill-opacity="1"
                        d=" M-2.5,-2.5 C-2.5,-2.5 2.5,-2.5 2.5,-2.5 C2.5,-2.5 2.5,2.5 2.5,2.5 C2.5,2.5 -2.5,2.5 -2.5,2.5 C-2.5,2.5 -2.5,-2.5 -2.5,-2.5z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,128.5,256.68798828125)"
                    opacity="1"
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(233,106,53)"
                        fill-opacity="1"
                        d=" M-2.5,-2.5 C-2.5,-2.5 2.5,-2.5 2.5,-2.5 C2.5,-2.5 2.5,2.5 2.5,2.5 C2.5,2.5 -2.5,2.5 -2.5,2.5 C-2.5,2.5 -2.5,-2.5 -2.5,-2.5z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,128.5,184.5)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(233,106,53)"
                        fill-opacity="1"
                        d=" M-2.5,-2.5 C-2.5,-2.5 2.5,-2.5 2.5,-2.5 C2.5,-2.5 2.5,2.5 2.5,2.5 C2.5,2.5 -2.5,2.5 -2.5,2.5 C-2.5,2.5 -2.5,-2.5 -2.5,-2.5z"
                      ></path>
                    </g>
                  </g>
                  <g mask="url(#__lottie_element_2724)">
                    <g
                      transform="matrix(0,-1,1,0,237.16000366210938,-90.0780029296875)"
                      opacity="1"
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,-120.0780029296875,34.09000015258789)"
                      >
                        <path
                          fill="rgb(255,104,44)"
                          fill-opacity="1"
                          d=" M9.92199993133545,-6.090000152587891 C9.92199993133545,-6.090000152587891 9.92199993133545,6.090000152587891 9.92199993133545,6.090000152587891 C9.92199993133545,6.090000152587891 -9.92199993133545,6.090000152587891 -9.92199993133545,6.090000152587891 C-9.92199993133545,6.090000152587891 -9.92199993133545,-6.090000152587891 -9.92199993133545,-6.090000152587891 C-9.92199993133545,-6.090000152587891 9.92199993133545,-6.090000152587891 9.92199993133545,-6.090000152587891z"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g mask="url(#__lottie_element_2718)">
                    <g
                      transform="matrix(0,-1,1,0,165.91000366210938,-97.08773803710938)"
                      opacity="1"
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,-120.0780029296875,34.09000015258789)"
                      >
                        <path
                          fill="rgb(255,104,44)"
                          fill-opacity="1"
                          d=" M9.92199993133545,-6.090000152587891 C9.92199993133545,-6.090000152587891 9.92199993133545,6.090000152587891 9.92199993133545,6.090000152587891 C9.92199993133545,6.090000152587891 -9.92199993133545,6.090000152587891 -9.92199993133545,6.090000152587891 C-9.92199993133545,6.090000152587891 -9.92199993133545,-6.090000152587891 -9.92199993133545,-6.090000152587891 C-9.92199993133545,-6.090000152587891 9.92199993133545,-6.090000152587891 9.92199993133545,-6.090000152587891z"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g mask="url(#__lottie_element_2712)">
                    <g
                      transform="matrix(1,0,0,1,228.5780029296875,79.53500366210938)"
                      opacity="1"
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,-120.0780029296875,34.09000015258789)"
                      >
                        <path
                          fill="rgb(255,104,44)"
                          fill-opacity="1"
                          d=" M9.92199993133545,-6.090000152587891 C9.92199993133545,-6.090000152587891 9.92199993133545,6.090000152587891 9.92199993133545,6.090000152587891 C9.92199993133545,6.090000152587891 -9.92199993133545,6.090000152587891 -9.92199993133545,6.090000152587891 C-9.92199993133545,6.090000152587891 -9.92199993133545,-6.090000152587891 -9.92199993133545,-6.090000152587891 C-9.92199993133545,-6.090000152587891 9.92199993133545,-6.090000152587891 9.92199993133545,-6.090000152587891z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div className={styles.title}>
                <h3>
                  <span>Data</span> Integration
                </h3>
                <p>Together, we retrieve value from your data.</p>
                <div className={styles.hr}></div>
                <svg
                  class="pb-row-services__service__icon z-1000"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className={styles.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 300"
                width="400"
                height="300"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <clipPath id="__lottie_element_2808">
                    <rect width="400" height="300" x="0" y="0"></rect>
                  </clipPath>
                  <mask id="__lottie_element_2809" mask-type="alpha">
                    <g
                      transform="matrix(1,0,0,1,251,182.2989959716797)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke="rgb(134,59,50)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d=" M108,-5.570000171661377 C68.5,-48.06999969482422 39.5,-4.298999786376953 29,6.429999828338623 C16.29599952697754,19.410999298095703 -13,37.93000030517578 -44.5,6.429999828338623 C-71,-20.06999969482422 -97.33300018310547,-4.070000171661377 -108,6.429999828338623"
                        ></path>
                      </g>
                    </g>
                  </mask>
                  <linearGradient
                    id="__lottie_element_2821"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="116.33000183105469"
                    y1="61.28900146484375"
                    x2="-196.2729949951172"
                    y2="-101.70099639892578"
                  >
                    <stop offset="0%" stop-color="rgb(255,104,44)"></stop>
                    <stop offset="50%" stop-color="rgb(159,67,37)"></stop>
                    <stop offset="100%" stop-color="rgb(64,29,31)"></stop>
                  </linearGradient>
                  <mask id="__lottie_element_2822" mask-type="alpha">
                    <g transform="matrix(1,0,0,-1,78,150.5)" opacity="1">
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          stroke="url(#__lottie_element_2825)"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke-opacity="1"
                          stroke-width="1"
                          d=" M-48,-89.5 C-48,-91.70760345458984 -46.20759963989258,-93.5 -44,-93.5 C-44,-93.5 44,-93.5 44,-93.5 C46.20759963989258,-93.5 48,-91.70760345458984 48,-89.5 C48,-89.5 48,89.5 48,89.5 C48,91.70760345458984 46.20759963989258,93.5 44,93.5 C44,93.5 -44,93.5 -44,93.5 C-46.20759963989258,93.5 -48,91.70760345458984 -48,89.5 C-48,89.5 -48,-89.5 -48,-89.5z"
                        ></path>
                      </g>
                    </g>
                  </mask>
                  <linearGradient
                    id="__lottie_element_2825"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    y1="0"
                    x2="63.43199920654297"
                    y2="123.1500015258789"
                  >
                    <stop offset="0%" stop-color="rgb(255,104,44)"></stop>
                    <stop offset="50%" stop-color="rgb(159,67,37)"></stop>
                    <stop offset="100%" stop-color="rgb(64,29,31)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_2832"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    y1="0"
                    x2="63.43199920654297"
                    y2="123.1500015258789"
                  >
                    <stop offset="0%" stop-color="rgb(255,104,44)"></stop>
                    <stop offset="50%" stop-color="rgb(159,67,37)"></stop>
                    <stop offset="100%" stop-color="rgb(64,29,31)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_2839"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-35.178001403808594"
                    y1="28.386999130249023"
                    x2="53.83000183105469"
                    y2="-59.18199920654297"
                  >
                    <stop offset="0%" stop-color="rgb(255,104,44)"></stop>
                    <stop offset="50%" stop-color="rgb(159,67,37)"></stop>
                    <stop offset="100%" stop-color="rgb(64,29,31)"></stop>
                  </linearGradient>
                </defs>
                <g clip-path="url(#__lottie_element_2808)">
                  <g transform="matrix(1,0,0,-1,170.5,85.5)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(133,58,49)"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-36.5,0 C-36.5,-15.72914981842041 -23.729150772094727,-28.5 -8,-28.5 C-8,-28.5 8,-28.5 8,-28.5 C23.729150772094727,-28.5 36.5,-15.72914981842041 36.5,0 C36.5,0 36.5,0 36.5,0 C36.5,15.72914981842041 23.729150772094727,28.5 8,28.5 C8,28.5 -8,28.5 -8,28.5 C-23.729150772094727,28.5 -36.5,15.72914981842041 -36.5,0 C-36.5,0 -36.5,0 -36.5,0z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,-1,251,85.5)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke="url(#__lottie_element_2839)"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-37,-24.5 C-37,-26.707599639892578 -35.20759963989258,-28.5 -33,-28.5 C-33,-28.5 33,-28.5 33,-28.5 C35.20759963989258,-28.5 37,-26.707599639892578 37,-24.5 C37,-24.5 37,24.5 37,24.5 C37,26.707599639892578 35.20759963989258,28.5 33,28.5 C33,28.5 -33,28.5 -33,28.5 C-35.20759963989258,28.5 -37,26.707599639892578 -37,24.5 C-37,24.5 -37,-24.5 -37,-24.5z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,-1,331,85.5)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(133,58,49)"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-36,-24.5 C-36,-26.707599639892578 -34.20759963989258,-28.5 -32,-28.5 C-32,-28.5 32,-28.5 32,-28.5 C34.20759963989258,-28.5 36,-26.707599639892578 36,-24.5 C36,-24.5 36,24.5 36,24.5 C36,26.707599639892578 34.20759963989258,28.5 32,28.5 C32,28.5 -32,28.5 -32,28.5 C-34.20759963989258,28.5 -36,26.707599639892578 -36,24.5 C-36,24.5 -36,-24.5 -36,-24.5z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,-1,78,150.5)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke="url(#__lottie_element_2832)"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-48,-89.5 C-48,-91.70760345458984 -46.20759963989258,-93.5 -44,-93.5 C-44,-93.5 44,-93.5 44,-93.5 C46.20759963989258,-93.5 48,-91.70760345458984 48,-89.5 C48,-89.5 48,89.5 48,89.5 C48,91.70760345458984 46.20759963989258,93.5 44,93.5 C44,93.5 -44,93.5 -44,93.5 C-46.20759963989258,93.5 -48,91.70760345458984 -48,89.5 C-48,89.5 -48,-89.5 -48,-89.5z"
                      ></path>
                    </g>
                  </g>
                  <g mask="url(#__lottie_element_2822)">
                    <g
                      transform="matrix(1,0,0,1,112.5,325.78546142578125)"
                      opacity="1"
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,-81.69000244140625,-93.04499816894531)"
                      >
                        <path
                          fill="rgb(233,106,53)"
                          fill-opacity="1"
                          d=" M5.809500217437744,-7.204999923706055 C5.809500217437744,-7.204999923706055 5.809500217437744,7.204999923706055 5.809500217437744,7.204999923706055 C5.809500217437744,7.204999923706055 -5.809500217437744,7.204999923706055 -5.809500217437744,7.204999923706055 C-5.809500217437744,7.204999923706055 -5.809500217437744,-7.204999923706055 -5.809500217437744,-7.204999923706055 C-5.809500217437744,-7.204999923706055 5.809500217437744,-7.204999923706055 5.809500217437744,-7.204999923706055z"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,-1,250.5,182.5)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke="url(#__lottie_element_2821)"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M-116.5,-57.5 C-116.5,-59.70759963989258 -114.70760345458984,-61.5 -112.5,-61.5 C-112.5,-61.5 112.5,-61.5 112.5,-61.5 C114.70760345458984,-61.5 116.5,-59.70759963989258 116.5,-57.5 C116.5,-57.5 116.5,57.5 116.5,57.5 C116.5,59.70759963989258 114.70760345458984,61.5 112.5,61.5 C112.5,61.5 -112.5,61.5 -112.5,61.5 C-114.70760345458984,61.5 -116.5,59.70759963989258 -116.5,57.5 C-116.5,57.5 -116.5,-57.5 -116.5,-57.5z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,251,182.2989959716797)"
                    opacity="1"
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(134,59,50)"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M108,-5.570000171661377 C68.5,-48.06999969482422 39.5,-4.298999786376953 29,6.429999828338623 C16.29599952697754,19.410999298095703 -13,37.93000030517578 -44.5,6.429999828338623 C-71,-20.06999969482422 -97.33300018310547,-4.070000171661377 -108,6.429999828338623"
                      ></path>
                    </g>
                  </g>
                  <g mask="url(#__lottie_element_2809)">
                    <g
                      transform="matrix(1,0,0,1,421.05401611328125,145.21099853515625)"
                      opacity="1"
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,-54.05400085449219,36.768001556396484)"
                      >
                        <path
                          fill="rgb(233,106,53)"
                          fill-opacity="1"
                          d=" M5.446000099182129,-9.767999649047852 C5.446000099182129,-9.767999649047852 5.446000099182129,9.767999649047852 5.446000099182129,9.767999649047852 C5.446000099182129,9.767999649047852 -5.446000099182129,9.767999649047852 -5.446000099182129,9.767999649047852 C-5.446000099182129,9.767999649047852 -5.446000099182129,-9.767999649047852 -5.446000099182129,-9.767999649047852 C-5.446000099182129,-9.767999649047852 5.446000099182129,-9.767999649047852 5.446000099182129,-9.767999649047852z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div className={styles.title}>
                <h3>
                  <span>Data</span> Visualization
                </h3>
                <p>Together, we visualize value from your data.</p>
                <div className={styles.hr}></div>
                <svg
                  class="pb-row-services__service__icon z-1000"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className={styles.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 300"
                width="400"
                height="300"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <clipPath id="__lottie_element_2920">
                    <rect width="400" height="300" x="0" y="0"></rect>
                  </clipPath>
                  <linearGradient
                    id="__lottie_element_2984"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    y1="0"
                    x2="42.89899826049805"
                    y2="-13.222999572753906"
                  >
                    <stop offset="0%" stop-color="rgb(255,104,44)"></stop>
                    <stop offset="50%" stop-color="rgb(159,67,34)"></stop>
                    <stop offset="100%" stop-color="rgb(64,29,25)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_2988"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    y1="0"
                    x2="42.89899826049805"
                    y2="-13.222999572753906"
                  >
                    <stop offset="0%" stop-color="rgb(255,104,44)"></stop>
                    <stop offset="50%" stop-color="rgb(159,67,34)"></stop>
                    <stop offset="100%" stop-color="rgb(64,29,25)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_2992"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    y1="0"
                    x2="-19.058000564575195"
                    y2="-92.2229995727539"
                  >
                    <stop offset="0%" stop-color="rgb(255,104,44)"></stop>
                    <stop offset="50%" stop-color="rgb(159,67,34)"></stop>
                    <stop offset="100%" stop-color="rgb(64,29,25)"></stop>
                  </linearGradient>
                  <linearGradient
                    id="__lottie_element_2996"
                    spreadMethod="pad"
                    gradientUnits="userSpaceOnUse"
                    x1="-9.786999702453613"
                    y1="6.070000171661377"
                    x2="96.75399780273438"
                    y2="81.81600189208984"
                  >
                    <stop offset="0%" stop-color="rgb(255,104,44)"></stop>
                    <stop offset="50%" stop-color="rgb(159,67,34)"></stop>
                    <stop offset="100%" stop-color="rgb(64,29,25)"></stop>
                  </linearGradient>
                </defs>
                <g clip-path="url(#__lottie_element_2920)">
                  <g transform="matrix(1,0,0,1,199.5,149.5)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke="url(#__lottie_element_2996)"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M0,-86.5 C48.59600067138672,-86.5 86.5,-48.59600067138672 86.5,0 C86.5,48.59600067138672 48.59600067138672,86.5 0,86.5 C-48.59600067138672,86.5 -86.5,48.59600067138672 -86.5,0 C-86.5,-48.59600067138672 -48.59600067138672,-86.5 0,-86.5z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,199.66799926757812,149.5)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(0.5,0.8660253882408142,-0.8660253882408142,0.5,0,0)"
                    >
                      <path
                        stroke="url(#__lottie_element_2992)"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M0,-60.66899871826172 C34.08399963378906,-60.66899871826172 60.66899871826172,-34.08399963378906 60.66899871826172,0 C60.66899871826172,34.08399963378906 34.08399963378906,60.66899871826172 0,60.66899871826172 C-34.08399963378906,60.66899871826172 -60.66899871826172,34.08399963378906 -60.66899871826172,0 C-60.66899871826172,-34.08399963378906 -34.08399963378906,-60.66899871826172 0,-60.66899871826172z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(-1,0,0,-1,199.66799926757812,149.5)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(0.8117982745170593,-0.5839380025863647,0.5839380025863647,0.8117982745170593,0,0)"
                    >
                      <path
                        stroke="url(#__lottie_element_2988)"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M0,-36.52000045776367 C20.517000198364258,-36.52000045776367 36.52000045776367,-20.517000198364258 36.52000045776367,0 C36.52000045776367,20.517000198364258 20.517000198364258,36.52000045776367 0,36.52000045776367 C-20.517000198364258,36.52000045776367 -36.52000045776367,20.517000198364258 -36.52000045776367,0 C-36.52000045776367,-20.517000198364258 -20.517000198364258,-36.52000045776367 0,-36.52000045776367z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(-0.9990943074226379,0.04255130514502525,-0.04255130514502525,-0.9990943074226379,199.66799926757812,149.5)"
                    opacity="0.37399999987134436"
                  >
                    <g
                      opacity="1"
                      transform="matrix(0.8117982745170593,-0.5839380025863647,0.5839380025863647,0.8117982745170593,0,0)"
                    >
                      <path
                        stroke="url(#__lottie_element_2984)"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M6.5279998779296875,35.965999603271484 C4.414999961853027,36.33100128173828 2.2339999675750732,36.52000045776367 0,36.52000045776367"
                      ></path>
                    </g>
                  </g>
                  <g
                    // style="display: none;"
                    transform="matrix(-0.8524900078773499,-0.5227435231208801,0.5227435231208801,-0.8524900078773499,200.16799926757812,149.5)"
                    opacity="0.41200000013903804"
                  >
                    <g
                      opacity="1"
                      transform="matrix(0.5,0.8660253882408142,-0.8673937320709229,0.500789999961853,0.32499998807907104,0.36899998784065247)"
                    >
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(255,104,44)"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M0,-60.66899871826172 C3.5,-60.66899871826172 6.920000076293945,-60.388999938964844 10.241000175476074,-59.8489990234375"
                      ></path>
                    </g>
                  </g>
                  <g
                    // style="display: none;"
                    transform="matrix(0.9997183084487915,0.023733602836728096,-0.023733602836728096,0.9997183084487915,200,149.5)"
                    opacity="0.41399999987112324"
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(255,104,44)"
                        stroke-opacity="1"
                        stroke-width="1"
                        d=" M0,-86.5 C3.8340001106262207,-86.5 7.60099983215332,-86.26399993896484 11.288000106811523,-85.80599975585938"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,88,46)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,88,196)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,88,103)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,88,253)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,162,46)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,162,196)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,200,151)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,200,151)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(233,106,53)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,162,103)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(233,106,53)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,162,253)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,238,46)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,238,196)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,238,103)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,238,253)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,313,46)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,313,196)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,313,103)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,313,253)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(134,59,50)"
                        fill-opacity="1"
                        d=" M0,-2 C1.1239999532699585,-2 2,-1.1239999532699585 2,0 C2,1.1239999532699585 1.1239999532699585,2 0,2 C-1.1239999532699585,2 -2,1.1239999532699585 -2,0 C-2,-1.1239999532699585 -1.1239999532699585,-2 0,-2z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <div className={styles.title}>
                <h3>
                  <span>Analytical</span> alignment
                </h3>
                <p>Together, we maximize the value of your data.</p>
                <div className={styles.hr}></div>
                <svg
                  class="pb-row-services__service__icon z-1000"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 6.72H6.72V12H5.28V6.72H0V5.28H5.28V0H6.72V5.28H12V6.72Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section_4} ${styles.section}`}></section>
        <section className={`${styles.section_5} ${styles.section}`}></section>
        <section className={`${styles.section_6} ${styles.section}`}></section>
        <section className={`${styles.section_7} ${styles.section}`}></section>
        <section className={`${styles.section_8} ${styles.section}`}></section>
        <section className={`${styles.section_9} ${styles.section}`}></section>
        <section className={`${styles.section_10} ${styles.section}`}></section>
      </page>
    </>
  );
}
