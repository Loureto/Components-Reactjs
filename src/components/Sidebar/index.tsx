import { data } from "./data";
import * as S from "./styles";

export const Sidebar = () => {
  return (
    <S.Container>
      <nav>
        <ul>
          {data && data.map((item) => <li key={item.id}>{item.component}</li>)}
        </ul>
      </nav>
    </S.Container>
  );
};
