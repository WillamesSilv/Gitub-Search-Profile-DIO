import * as S from './styled';
import useGithub from '../../hooks/github-Hooks';

export function Profile() {

  const { githubState } = useGithub()

  return (
    <S.Wrapper>
      <S.WrapperImg 
      src={githubState.user.avatar_url} 
      alt="Imagem do perfil do usuário" 
      />
      <S.WrapperInfoUser>
        <div>
            <h1>{githubState.user.name}</h1>
            <S.WrapperUserName>
              <h3>Username:</h3>
              <a 
              href={githubState.user.html_url} 
              target="_blank" 
              rel="noreferrer"
              >
                {githubState.user.login}
              </a>
            </S.WrapperUserName>
            <p>{githubState.user.bio}</p>
            <a 
            href={githubState.user.blog}
            target="_blank" 
            >{githubState.user.blog}</a>
          <S.WrapperStatusCount>
            <div>
              <h4>Followers</h4>
              <span>{githubState.user.followers}</span>
            </div>
            <div>
              <h4>Following</h4>
              <span>{githubState.user.following}</span>
            </div>
          </S.WrapperStatusCount>
        </div>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}