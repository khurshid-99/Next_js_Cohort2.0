import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      <h1>This is product Page id = {id} </h1>
    </div>
  );
};

export default page;
