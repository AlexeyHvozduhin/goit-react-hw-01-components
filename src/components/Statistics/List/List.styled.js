import styled from 'styled-components';

const colorRandomize = () => {
  const rainbowColors = [
    '#FF000050', // Red
    '#FF7F0050', // Orange
    '#FFFF0050', // Yellow
    '#00FF0050', // Green
    '#0000FF50', // Blue
    '#4B008250', // Indigo
    '#9400D350', // Violet
  ];
  const randomIndex = Math.floor(Math.random() * rainbowColors.length);
  return rainbowColors[randomIndex];
};

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
  background-color: ${colorRandomize};
`;

export const Label = styled.span`
  font-size: 15px;
`;
export const Percentage = styled.span`
  font-size: 20px;
`;
