import { toast } from "react-toastify";
import { Form } from "@/components";
import * as S from "./styles";

export const Home = () => {
  const handleClickToast = () => toast.success("Testando o toastify");
  return (
    <S.Container>
      <Form />
      <br />
      <button onClick={() => handleClickToast()}>Toast</button>
    </S.Container>
  );
};

export default Home;
