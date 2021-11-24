import styled from "styled-components";

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  border: 1px solid #CCC;
  border-radius: 6px;
  
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
  padding: 8px;
`

export const WrapperUserName = styled.div `
  display: flex;
  align-items: center;
  margin: 8px 0;
  h3 {
    margin-right: 8px;
  }
`

export const WrapperStatusCount = styled.div `
  display: flex;
  align-items: center;
  margin-top: 8px;
  div {
    margin-right: 8px;
    text-align: center;
  }
`