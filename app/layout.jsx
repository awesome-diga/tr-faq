import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { IBM_Plex_Mono as FontSans } from "next/font/google";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const repoDomain = "https://github.com/awesome-diga/tr-faq";

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>BSI TR-03161</b>{" "}
          <span style={{ opacity: "60%" }}>Fragen und Antworten</span>
        </div>
      }
      projectLink={repoDomain}
    />
  );
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
        </Layout>
      </body>
    </html>
  );
}
