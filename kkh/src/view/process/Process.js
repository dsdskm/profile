import { Card, CardContent } from "@material-ui/core";
import styled from "styled-components/macro";
import Develop from "./Develop";
import Release from "./Release";
import Plan from "./Plan";
const Wrapper = styled.div`
  padding: 10px;
  & > * {
    margin: 10px;
  }
`;
const Process = () => {
  const getCard = (name, color) => {
    return (
      <div style={{ width: "120px",margin:"5px", justifyContent: "center" }}>
        <Card style={{ background: color }}>
          <CardContent>
            <div style={{ textAlign: "center" }}>{name}</div>
          </CardContent>
        </Card>
      </div>
    );
  };
  return (
    <>
      <Card>
        <CardContent>
          <div style={{ display: "flex" }}>
            {getCard("Clickable", "white")}
            {getCard("No-Clickable", "#EAE4E3")}
          </div>
          <Wrapper>
            <Plan />
            <Develop />
            <Release />
          </Wrapper>
        </CardContent>
      </Card>
    </>
  );
};

export default Process;
