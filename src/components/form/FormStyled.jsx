import styled from "@emotion/styled";

export const FormBox = styled.div`
// padding: 16px;
width: 360px;
display: flex;
flex-direction: column;
`;

export const ButtonAdd = styled.button`
margin-top: 16px;
min-width: 200px;
height: 40px;
font-size: 20px;
background-color: rgb(24, 140, 232);
color: #ffffff;
border: none;
border-radius: 4px;

&:hover,
&:focus {
    background-color: rgb(100, 50, 200);
}
`;

export const LabelBox = styled.label`
font-size: 24px;
`;

export const InputBox = styled.input`
margin-left: 10px;
font-size: 16px;
outline: transparent;
border-radius: 4px;

&:focus,
&:hover {
    border-color: rgb(33, 150, 243);
}
`;