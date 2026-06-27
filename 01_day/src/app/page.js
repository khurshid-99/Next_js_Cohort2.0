import Link from "next/link";
import React from "react";

const page = () => {
  return <div>
     <div className="flex gap-5">
          <Link href={"/mainlayout"}>Main Layout</Link>
          <Link href={"/authlayout"}>Auth Layout</Link>
        </div>
    this is main layout page
    </div>;
};

export default page;
