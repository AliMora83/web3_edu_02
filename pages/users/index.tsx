import { GetStaticProps } from "next";
import Link from "next/link";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";

type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Web3 Edu">
    <section className="bg-gray-100 text-gray-800">
      <div className="container mx-auto flex flex-col justify-center items-center h-screen px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Users
          <span className="text-lime-600">
            {" "}
            List
          </span>
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Example fetching data from inside{" "}
          <code>getStaticProps()</code>.
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-lime-600 text-gray-50">
            <Link href="/">Home</Link>
          </button>
          <button className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300">
            Learn more
          </button>
        </div>
        <div className="my-10">
          <p>
            Example fetching data from inside{" "}
            <code>getStaticProps()</code>.
          </p>
          <p>You are currently on: /users</p>
          <List items={items} />
        </div>
      </div>
    </section>
  </Layout>
);

export const getStaticProps: GetStaticProps =
  async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items: User[] = sampleUserData;
    return { props: { items } };
  };

export default WithStaticProps;
