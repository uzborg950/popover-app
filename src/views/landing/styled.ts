import styled from "styled-components";

export const Heading = styled.p`
  font-weight: 800;
  font-size: 24px;
`;

export const ColoredContainer = styled.div<{ $backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  padding: 56px 16px 56px 16px;
  gap: 5px;
  align-items: flex-start;
  
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 12px;
`;
