import { ToastContainer } from "react-toastify";
import { LayoutProps } from "@/@types/layout";
import { Sidebar } from "../Sidebar";
import * as S from "./styles";
import "react-toastify/dist/ReactToastify.css";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <Sidebar />
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={2}
        pauseOnHover={false}
        theme="colored"
      />
    </S.Container>
  );
};
