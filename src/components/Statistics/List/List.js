import { ElementList, Element, Label, Percentage } from './List.styled';

export const List = ({ data }) => {
  return (
    <ElementList>
      {data.map(item => {
        return (
          <Element key={item.id}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </Element>
        );
      })}
    </ElementList>
  );
};
