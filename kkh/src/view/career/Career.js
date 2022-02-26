
import { Card, CardContent } from "@material-ui/core";
import styled from "styled-components/macro";
import Project from "./Project";
import Profile from "./Profile";
const Wrapper = styled.div`
  padding: 10px;
  & > * {
    margin: 10px;
  }
`;

const Career = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Wrapper>
            <Profile />
            <Project />
          </Wrapper>
        </CardContent>
      </Card>
    </>
  );
};

export default Career;
