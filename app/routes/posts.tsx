import { Outlet } from "@remix-run/react";

function Posts() {
  return (
    <>
      <span>Small text to demonstrate nested routing.</span>
      <Outlet />
    </>
  );
}

export default Posts;
