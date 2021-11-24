import styled from "styled-components";

export const Wrapper = styled.div `
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 25px;

  input{
    outline: none;
    width: 100%;
    font-family: 'Roboto' sans-serif;
  }

  button{
    background: #18a4e7;
    color: white;
    width: 100px;
    cursor: pointer;
    margin-left: 12px;
    transition: all 0.3s;

    &:hover{
      background: #18a4c7;
      opacity: 0.8;
    }
  }

  input, button{
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #CCC;
    font-size: 16px;
  }
`