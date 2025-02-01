import { Outlet } from "react-router-dom";
import { LayoutContainer } from "../layoutContainer.styles";

export const DefaultLayout = () => {
  return (
    <>
      <h1>HEADER</h1>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
      <h1>Footer</h1>
    </>
  );
};
