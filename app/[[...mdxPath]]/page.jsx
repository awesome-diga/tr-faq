import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../mdx-components";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

const Box = ({ title, children }) => (
  <div className="relative border rounded-md mb-3 mt-6 text-sm tracking-tight opacity-100 pt-5 p-4 border-slate-400 font-medium">
    {title && (
      <div className="border-slate-400 border rounded bg-white dark:bg-slate-800 text-sm px-4 absolute left-2 -top-2.5">
        <p>{title}</p>
      </div>
    )}
    <p>{children}</p>
  </div>
);

export async function generateMetadata(props) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props) {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata } = result;
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <h1 className="mt-2 mb-1">
        {metadata.title && (
          <span className="mt-3 text-base/7 font-semibold text-indigo-600">
            {metadata.title}
          </span>
        )}
        {metadata.depth && (
          <span
            className={
              "ml-3 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-red-600/10 capitalize " +
                {
                  examine: "bg-yellow-200 text-yellow-700",
                  check: "bg-purple-100 text-purple-700",
                }[metadata.depth] || ""
            }
          >
            {metadata.depth}
          </span>
        )}
      </h1>
      {metadata.desc_short && (
        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
          {metadata.desc_short}
        </h2>
      )}

      {metadata.desc_long && (
        <Box title={"Anforderung"}>{metadata.desc_long}</Box>
      )}
      {metadata.remarks && <Box title={"Prüfung"}>{metadata.remarks}</Box>}
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
