import { useEffect, useState } from 'react'
import useGithub from '../../hooks/github-Hooks'
import { RepositoryITem } from '../Repository-item'
import * as S from './styled'

export function Repositories() {

  const { githubState, getUserRepos } = useGithub()
  const [ hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false)

  useEffect(()=> {
    if(!!githubState.user.login) {
      getUserRepos()
    }
    setHasUserForSearchRepos(!!githubState.repositories)
  }, [githubState.user])

  return (
    <>
      {hasUserForSearchRepos ? 
        <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            {githubState.repositories.map((item) => (
              <RepositoryITem
              key={item.id} 
              name={item.name}
              linkToRepo={item.html_url}
              path={item.full_name}
              />
            ))}
            
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            {githubState.starred.map((item) => (
                <RepositoryITem
                key={item.id} 
                name={item.name}
                linkToRepo={item.html_url}
                path={item.full_name}
                />
              ))}
          </S.WrapperTabPanel>
        </S.WrapperTabs>
        : <></>}
    </>
  )
}