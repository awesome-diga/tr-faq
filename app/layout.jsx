import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { IBM_Plex_Sans as FontSans } from "next/font/google";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const repoDomain = "https://github.com/awesome-diga/tr-faq/blob/main";

export default async function RootLayout({ children }) {
  const logo = (
    <div>
      <b>BSI TR-03161</b>{" "}
      <span style={{ opacity: "60%" }}>Fragen und Antworten</span>
    </div>
  );
  const navbar = <Navbar logo={logo} projectLink={repoDomain} />;
  const pageMap = await getPageMap();
  return (
    <html lang="de" dir="ltr" suppressHydrationWarning>
      <body className={"font-sans antialiased " + fontSans.variable}>
        <Layout
          navbar={navbar}
          editLink="Edit this page on GitHub"
          docsRepositoryBase={repoDomain}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
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
