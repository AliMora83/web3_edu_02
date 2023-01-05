import Link from "next/link";
import * as React from "react";

import { User } from "../interfaces";

type ListDetailProps = {
  item: User;
};

const ListDetail = ({
  item: user,
}: ListDetailProps) => (
  <div>
    <section className="bg-gray-100 text-gray-800">
      <div className="container mx-auto flex flex-col justify-center items-center h-screen px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Detail for
          <span className="text-lime-600">
            {" "}
            {user.name}
          </span>
        </h1>
        <p className="text-2xl font-bold leading-none sm:text-3xl">
          ID: {user.id}
        </p>
        <p className="text-2xl font-bold leading-none sm:text-3xl">
          Grade: {user.grade}
        </p>
        <p className="px-8 mt-8 mb-12 text-lg">
          Cupiditate minima voluptate temporibus
          quia? Architecto beatae esse ab amet
          vero eaque explicabo XXX!
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-lime-600 text-gray-50">
            <Link href="/">Home</Link>
          </button>
          <button className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300">
            <Link href="/users">Users</Link>
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default ListDetail;
