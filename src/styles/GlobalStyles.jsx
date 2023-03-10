import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body,#root{
  font-family: "Roboto",sans-serif;
  min-height: 100vh;
  min-width:100vw;
  height:100%;
  width:100%;
   background: #dedede;
}

button{
  cursor: pointer;
}

a{
  text-decoration: none;
}

button{
  border:none;
  cursor: pointer;
}
`;
