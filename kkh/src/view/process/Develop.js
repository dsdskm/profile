import { Card, CardContent, Typography } from "@material-ui/core";
import { getCard } from "../../common/GlobalStyles";
import styled from "styled-components/macro";
const Wrapper = styled.div`
  padding: 10px;
  & > * {
    margin: 10px;
  }
`;
const DEVELOP_ARR = [
  {
    name: "플랫폼 선정",
  },
  {
    name: "구조 설계",
  },
  { name: "구현" },
  { name: "형상관리" },
  { name: "검증 및 수정" },
  { name: "문서화" },
];
const CODING_ARR = [
  {
    name: "구조 설계",
  },
  {
    name: "기능 구현",
  },
  { name: "Test Code 구현" },
  { name: "리팩토링" },
  { name: "스타일링" },
];
const CLIENT_ARR = [
  {
    name: "Android",
    url: "https://developer.android.com/?hl=ko",
  },
  { name: "IOS", url: "https://developer.apple.com/kr/" },
  { name: "ReactNative", url: "https://reactnative.dev/" },
  { name: "Flutter", url: "https://flutter-ko.dev/" },
];

const BACKEND_ARR = [
  {
    name: "Firebase",
    url: "https://console.firebase.google.com/",
  },
  {
    name: "AWS",
    url: "https://aws.amazon.com/",
  },
  {
    name: "NCP",
    url: "https://www.ncloud.com/",
  },
  {
    name: "Kakao",
    url: "https://www.kakaoicloud.com/",
  },
];
const FRONTEND_ARR = [
  {
    name: "React",
    url: "https://ko.reactjs.org/",
  },
  {
    name: "Vue",
    url: "https://kr.vuejs.org/v2/guide/index.html",
  },
  {
    name: "Angular",
    url: "https://angular.kr/",
  },
];

const DATABASE_ARR = [
  {
    name: "NoSql",
    url: "",
  },
  {
    name: "MySql",
    url: "",
  },
  {
    name: "Mongo DB",
    url: "",
  },
  {
    name: "Maria DB",
    url: "",
  },
];
const STYLE_ARR = [
  {
    name: "MUI",
    url: "https://mui.com/",
  },
  {
    name: "Bootstrap",
    url: "https://getbootstrap.kr/",
  },
];

const API_ARR = [
  {
    name: "GCP",
    url: "https://console.cloud.google.com/",
  },
  {
    name: "AWS",
    url: "https://aws.amazon.com/",
  },
  {
    name: "NCP",
    url: "https://www.ncloud.com/",
  },
  {
    name: "Kakao",
    url: "https://developers.kakao.com/",
    api: ["Map"],
  },
  {
    name: "SKT",
    url: "https://openapi.sk.com/",
  },
  {
    name: "OPEN DATA",
    url: "https://www.data.go.kr/",
  },
  {
    name: "SEOUL",
    url: "https://data.seoul.go.kr/",
  },
];
const COMMUNITY_ARR = [
  {
    name: "MDN",
    url: "https://developer.mozilla.org/ko/docs/Web/JavaScript",
  },
  {
    name: "W3",
    url: "https://www.w3schools.com/",
  },
];
const CI_CD_ARR = [
  {
    name: "Git",
    url: "https://git-scm.com/",
  },
  {
    name: "Gerrit",
    url: "https://www.gerritcodereview.com/",
  },
  {
    name: "Jenkins",
    url: "https://www.jenkins.io/",
  },
];

const TEST_TOOL_ARR = [
  {
    name: "Espresso",
    url: "https://developer.android.com/training/testing/espresso?hl=ko",
  },
  {
    name: "Firebase Test Lab",
    url: "https://firebase.google.com/docs/test-lab/?hl=ko",
  },
  {
    name: "Google A/B",
    url: "https://support.google.com/optimize/answer/6211930?hl=ko#zippy=%2C%EC%9D%B4-%EB%8F%84%EC%9B%80%EB%A7%90%EC%97%90-%EB%82%98%EC%99%80-%EC%9E%88%EB%8A%94-%EB%82%B4%EC%9A%A9%EC%9D%80-%EB%8B%A4%EC%9D%8C%EA%B3%BC-%EA%B0%99%EC%8A%B5%EB%8B%88%EB%8B%A4",
  },
  { name: "Test Flight", url: "https://developer.apple.com/kr/testflight/" },
];
const USER_TEST_ARR = [
  {
    name: "Test Case",
  },
  {
    name: "White box Test",
  },
  {
    name: "Black box Test",
  },
  {
    name: "Random Test",
  },
  {
    name: "Performance Test",
  },
  {
    name: "Stress Test",
  },
];
const Develop = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography component={"div"} key="name" variant="h5">
            Develop
          </Typography>
          <Typography component={"div"} key="name">
            개발
          </Typography>
          <Wrapper>
            {getCard(DEVELOP_ARR, "개발 단계")}
            플랫폼
            {getCard(CLIENT_ARR, "Client")}
            {getCard(BACKEND_ARR, "Backend")}
            {getCard(FRONTEND_ARR, "Frontend")}
            {getCard(DATABASE_ARR, "Database")}
            {getCard(STYLE_ARR, "Style")}
            {getCard(API_ARR, "API")}
            {getCard(COMMUNITY_ARR, "Comunity")}
            구현
            {getCard(CODING_ARR, "")}
            형상관리
            {getCard(CI_CD_ARR, "")}
            검증
            <Card>
              {getCard(USER_TEST_ARR, "사용자 테스트")}
              {getCard(TEST_TOOL_ARR, "Tool")}
            </Card>
          </Wrapper>
        </CardContent>
      </Card>
    </>
  );
};

export default Develop;
