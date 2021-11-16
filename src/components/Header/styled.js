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
  }

  input, button{
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #CCC;
    font-size: 16px;
  }
`