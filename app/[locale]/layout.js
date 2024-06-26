// import { useLocale } from "next-intl";
// import { notFound } from "next/navigation";
// import { Urbanist } from "next/font/google";
// import "../globals.css";

// const urbanist = Urbanist({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children, params }) {
//   //  GET THE CURRENT LOCALE
//   const locale = useLocale();
//   // Show 404 Error if language not found
//   if (params.locale !== locale) {
//     notFound();
//   }
//   return (
//     <html lang={locale}>
//       <body className={urbanist.className}>{children}</body>
//     </html>
//   );
// }

import { useLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Urbanist } from "next/font/google";
import "../globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "ventriloc - We turn data into value",
  description: "Made With Love By Saeed Khaled",
};

export default function RootLayout({ children, params }) {
  //  GET THE CURRENT LOCALE
  const locale = useLocale();
  // Show 404 Error if language not found
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <NextIntlClientProvider messages={{}}>
      <html lang={locale}>
        <body className={urbanist.className}>{children}</body>
      </html>
    </NextIntlClientProvider>
  );
}
