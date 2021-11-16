import { Header } from '../Header';
import * as S from './styled';

export function Layout({children}) {
  return (
    <S.WrapperLayout>
      <Header/>
      {children}
    </S.WrapperLayout>
  )
}