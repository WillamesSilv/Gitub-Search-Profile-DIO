import * as S from './styled'

export function RepositoryITem({ name, linkToRepo, path }) {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <h4>{path}</h4>
      <a 
      href={linkToRepo} 
      target="_blank" 
      rel="noreferrer"
      >
        Visitar Repositório
      </a>
    </S.Wrapper>
  )
}