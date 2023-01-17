import React, { FC, Suspense } from "react";
import { Outlet } from "react-router";

const Layout: FC = () => (
  <Suspense>
    <Outlet></Outlet>
  </Suspense>
)

export default Layout