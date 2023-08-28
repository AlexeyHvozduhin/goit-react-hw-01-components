import { ElementList, Element, Label, Percentage } from './List.styled';

export const List = ({ data }) => {
  const rainbowColors = [
    '#FF000050', // Red
    '#FF7F0050', // Orange
    '#FFFF0050', // Yellow
    '#00FF0050', // Green
    '#0000FF50', // Blue
    '#4B008250', // Indigo
    '#9400D350', // Violet
  ];

  const colorRandomize = () => {
    const randomIndex = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[randomIndex];
  };
  return (
    <ElementList>
      {data.map(item => {
        return (
          <Element
            className="item"
            key={item.id}
            style={{ backgroundColor: colorRandomize() }}
          >
            <Label className="label">{item.label}</Label>
            <Percentage className="percentage">{item.percentage}%</Percentage>
          </Element>
        );
      })}
    </ElementList>
  );
};
