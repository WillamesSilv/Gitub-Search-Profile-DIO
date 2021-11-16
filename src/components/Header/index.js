import * as S from './styled';
import useGithub from '../../hooks/github-Hooks';
import { useState } from 'react';

export function Header(){

  const { getUser } = useGithub()

  const [ usernameForSearch, setUserNameForSearch ] = useState()

  const submitGetUser = () => {
    if (!usernameForSearch) return;

    return getUser(usernameForSearch);
  }

  return(
    <header>
      <S.Wrapper>
        <input 
        type="text" 
        placeholder="Digite o username para pesquisa" 
        onChange={(event) => setUserNameForSearch(event.target.value) }
        ></input>
        <button 
        type="submit"
        onClick={submitGetUser}
        >
          Buscar
        </button>
      </S.Wrapper>
    </header>
  )
}