import { styled } from 'styled-components';

export const List = styled.ul`
  color: orange;
  list-style-type: none;

  padding: 0px;
  margin: 0px;
  margin-top: 40px;
`;

export const ListElement = styled.li`
  width: 350px;
  height: 100px;

  border: 1px gray solid;
  border-radius: 5px;
  background-color: white;

  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 12px;
  padding-left: 20px;
  gap: 10px;
`;

export const Online = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Name = styled.p`
  margin: 0;
  font-size: 20px;
  color: black;
  font-weight: 600;
`;
