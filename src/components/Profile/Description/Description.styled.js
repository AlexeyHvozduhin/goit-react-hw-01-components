import styled from 'styled-components';

export const DescriptionDiv = styled.div`
  width: 350px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;

  padding-bottom: 30px;
`;

export const Pic = styled.img`
  width: 150px;
  border-radius: 50%;
  margin: 30px 0px;
`;

export const Name = styled.p`
  font-size: 26px;
  font-weight: 600;
  margin: 0px;
`;

export const Tag = styled.p`
  margin: 0px;
  color: #9b9bad;
  font-size: 23px;
  font-weight: 300;
`;

export const Location = styled.p`
  margin: 0px;
  color: #9b9bad;
  font-size: 23px;
  font-weight: 400;
`;
