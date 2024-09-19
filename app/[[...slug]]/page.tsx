import { NextPage } from "next";
import { headers } from "next/headers";

const getPathFromSlug = (slug: string[]): string =>
  slug ? `/${slug.map(decodeURIComponent).join("/")}/` : "/";

export const revalidate = 60;
export const dynamicParams = true;
export const experimental_ppr = true;

const Page: NextPage<{ params: { slug: string[] } }> = async (props) => {
  const path = getPathFromSlug(props.params.slug);
  const hdrs = headers();

  return (
    <>
      <main>
        <pre>{JSON.stringify({ ...props, path, ...hdrs }, null, 2)}</pre>
      </main>
    </>
  );
};

export default Page;
