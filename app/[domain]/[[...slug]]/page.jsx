import { headers } from "next/headers";

export const revalidate = 60;
export const dynamicParams = true;
export const experimental_ppr = true;

const Page = async (props) => {
  const hdrs = headers();

  return (
    <>
      <main>
        <pre>{JSON.stringify({ ...props, ...hdrs }, null, 2)}</pre>
      </main>
    </>
  );
};

export default Page;
