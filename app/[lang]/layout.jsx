import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { IBM_Plex_Sans as FontSans } from "next/font/google";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "../globals.css";

// TODO: Static export is broken. Navigation within a language works, but switching is broken.
// Check: https://github.com/shuding/nextra/issues/3934
// TODO: Default language does not work correctly, for static export
// Check: https://github.com/vercel/next.js/issues/54437
// Think about using something like
// <meta http-equiv = "refresh" content = "0; url = https://tr.digahub.dev/de" />
// for the default language
// TODO: Dictonaries

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const repoDomain = "https://github.com/awesome-diga/tr-faq/blob/main";

export default async function RootLayout({ children, params }) {
  const logo = (
    <div>
      <b>BSI TR-03161</b>{" "}
      <span style={{ opacity: "60%" }}>Fragen und Antworten</span>
    </div>
  );
  const navbar = <Navbar logo={logo} projectLink={repoDomain} />;
  const { lang } = await params
  const pageMap = await getPageMap(`/${lang}`);
  return (
    <html lang="de" dir="ltr" suppressHydrationWarning>
      <Head />
      <body className={"font-sans antialiased " + fontSans.variable}>
        <Layout
          navbar={navbar}
          editLink="Edit this page on GitHub"
          docsRepositoryBase={repoDomain}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
          i18n={[{ locale: "de", name: "Deutsch" },{ locale: "en", name: "English" },]}
        >
          {children}
          <Footer>
            Content licensed under CC-BY-SA-4.0
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
