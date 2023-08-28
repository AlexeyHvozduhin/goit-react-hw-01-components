import styled from 'styled-components';

export const StatsList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style-type: none;

  display: flex;
  width: 350px;
  justify-content: center;
  align-items: center;
`;

export const ElementList = styled.li`
  width: 33%;
  height: 80px;
  background-color: #cdcddf;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px #e5e5e5 solid;
`;

export const Label = styled.span`
  font-size: 15px;
  color: #7a7b89;
`;

export const Quantity = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #3d3d3f;
`;
