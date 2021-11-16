import { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: []
})

export function GithubProvider({ children }) {

  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      login: undefined,
      name: undefined,
      avatar_url: undefined,
      html_url: undefined,
      bio: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      public_repos: 0,
      public_gists: 0,
      followers: 0,
      following: 0,
    },
    repositories: [],
    starred: []
  })

  const getUser = (username) => {

    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading
    }))

    api.get(`users/${username}`).then( ({data}) => {
      setGithubState(prevState => ({
        ...prevState,
        hasUser: true,
        user: {
          id: data.id,
          login: data.login,
          name: data.name,
          bio: data.bio,
          avatar_url: data.avatar_url,
          html_url: data.html_url,
          blog: data.blog,
          company: data.company,
          location: data.location,
          public_repos: data.public_repos,
          public_gists: data.public_gists,
          followers: data.followers,
          following: data.following,
        }
      }))
    }).finally(() => {
      setGithubState((prevState) => ({
        ...prevState,
        loading: !prevState.loading
      }))
    })
  }

  const getUserRepos = () => {
    api.get(`users/${githubState.user.login}/repos`).then( ({data}) => {
      setGithubState(prevState => ({
        ...prevState,
        repositories: data,
      }))
    })
  }

  const getUserStarred = () => {
    api.get(`users/${githubState.user.login}/starred`).then( ({data}) => {
      setGithubState(prevState => ({
        ...prevState,
        starred: data,
      }))
    })
  }

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback(() => getUserRepos(), []),
    getUserStarred: useCallback(() => getUserStarred(), [])
  }

  return (
    <GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>
  )
}