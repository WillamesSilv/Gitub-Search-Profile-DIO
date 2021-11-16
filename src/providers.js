import { ResetCss }  from "./global/resetCss";
import { GithubProvider } from "./provider/github-provider";
import App from './App';

export function Providers() {
  return (
    <main>
      <GithubProvider>
        <ResetCss/>
        <App />
      </GithubProvider>
    </main>
  )
}