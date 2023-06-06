import styled from "styled-components";
import { LeftContainer } from "./components/LeftContainer";
import { RightContainer } from "./components/RightContainer";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 80px 96px 0 96px;
  gap: 50px;
`;

export const LandingView: React.FC = () => {
  return (
    <Container>
      <LeftContainer />
      <RightContainer />
    </Container>
  );
};
