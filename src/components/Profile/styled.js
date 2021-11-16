import styled from "styled-components";

export const Wrapper = styled.div `
  display: flex;
  align-items: flex-start;
`
export const WrapperImg = styled.img `
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`
export const WrapperInfoUser = styled.div `
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`

export const WrapperUserName = styled.div `
  display: flex;
  align-items: center;
  h3 {
    margin-right: 8px;
  }
`

export const WrapperStatusCount = styled.div `
  display: flex;
  align-items: center;
  div {
    margin-right: 8px;
    text-align: center;
  }
`