import styled from 'styled-components';

export const ElementList = styled.ul`
  list-style-type: none;
  color: white;
  width: 350px;
  margin: 0px;
  padding: 0px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Element = styled.li`
  width: 20%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 15px;
`;
export const Percentage = styled.span`
  font-size: 20px;
`;
