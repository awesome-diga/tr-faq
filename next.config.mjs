import nextra from "nextra";

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  contentDirBasePath: "/",
});

export default withNextra({
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/nxtrtst" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/nxtrtst/" : "",
});
