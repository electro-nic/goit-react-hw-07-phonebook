import styled from '@emotion/styled';

export const ListContacts = styled.ul`
margin: 0px;
list-style: none;
padding: 0px;
`;

export const ButtonDel = styled.button`
min-width: 100px;
margin-left: 16px;
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

export const ListItem = styled.li`
margin-bottom: 8px;
`