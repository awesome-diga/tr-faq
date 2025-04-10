import nextra from "nextra";

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  contentDirBasePath: "/",
  unstable_shouldAddLocaleToLinks: true,
});

export default withNextra({
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "de",
  },
});
