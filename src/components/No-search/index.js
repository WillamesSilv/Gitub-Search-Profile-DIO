import * as S from './styled';
import { GoMarkGithub } from "react-icons/go";

export function NoSearch() {
  return(
    <S.Wrapper>
      <div>
        <GoMarkGithub size={200} opacity={0.4} />
        <h1>Nenhuma pesquisa realizada.</h1>
      </div>
    </S.Wrapper>
  )
}