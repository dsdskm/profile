import { Card, CardContent, Typography } from "@material-ui/core";
import { getCard } from "../../common/GlobalStyles";
import styled from "styled-components/macro";
const Release = () => {
  const Wrapper = styled.div`
    padding: 10px;
    & > * {
      margin: 10px;
    }
  `;
  const RELEASE_ARR = [
    {
      name: "Play Store",
      url: "https://play.google.com/",
    },
    { name: "App Store", url: "https://www.apple.com/kr/app-store/" },
    { name: "Firebase hosting" },
    { name: "AWS hosting" },
  ];
  return (
    <>
      <Card>
        <CardContent>
          <Typography component={"div"} key="name" variant="h5">
            Release / Update
          </Typography>
          <Typography component={"div"} key="name">
            배포 / 업데이트
          </Typography>
          <Wrapper>{getCard(RELEASE_ARR, "App & Web")}</Wrapper>
        </CardContent>
      </Card>
    </>
  );
};

export default Release;
