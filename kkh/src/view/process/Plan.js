import { Card, CardContent, Typography } from "@material-ui/core";
import { getCard, getMdoal } from "../../common/GlobalStyles";
import styled from "styled-components/macro";
import { useState } from "react";

const Wrapper = styled.div`
  padding: 10px;
  & > * {
    margin: 10px;
  }
`;
const PLAN_ARR = [
  {
    name: "아이템 선정",
    text: ["1. 공모전", "2. 정부 사업", "3. 자체 게획"],
  },
  {
    name: "시장 분석",
    text: ["1. 고객 분석", "2. 시장 분석", "3. 기대 수요 , 4. 경쟁사 현황"],
  },
  {
    name: "매출 계획",
    text: ["1. 연구/개발비", "2. 마케팅/영업비", "3. 유지 관리비", "기타 세금"],
  },
  {
    name: "마케팅 계획",
    text: ["1. 4P 분석 활용(Product, Place, Promotion, Price)", "2. 광고/이벤트"],
  },
  {
    name: "요구사항 정의",
    text: [
      "1. 기능적 요구사항(동작 정의, spec, performance,error case)",
      "2. 비기능적 요구사항(기능적 요구사항외 요구사항)",
    ],
  },
  {
    name: "시나리오 정의",
    text: ["1. 모든 화면에서의 표시 정보, 동작 정의", "2. 에러 케이스 정의"],
  },
  {
    name: "개발 계획",
    text: ["1. 플랫폼 선정", "2. 구조 설계", "3. 구현", "4. 형상관리", "5. 검증 및 수정", "6. 문서화"],
  },
];
const CLIENT_ARR = [
  {
    name: "위티비",
    url: "https://www.wevity.com/",
  },
  { name: "캠퍼스몬", url: "http://campusmon.jobkorea.co.kr/" },
  { name: "씽굿", url: "https://www.thinkcontest.com/" },
  { name: "씽유", url: "https://thinkyou.co.kr/index.asp" },
  { name: "대티즌", url: "http://www.detizen.com/" },
  { name: "씽유", url: "https://thinkyou.co.kr/index.asp" },
  { name: "스펙토리", url: "http://www.spectory.net/contest" },
  { name: "공공데이터 경진", url: "https://www.startupidea.kr/notice/" },
];
const UX_ARR = [
  {
    name: "UX 가이드",
    url: "https://ovenapp.io/",
  },
  {
    name: "디자인 가이드",
  },
];
const DEVELOP_ARR = [
  {
    name: "WBS",
  },
  {
    name: "Scrum",
  },
];
const Plan = () => {
  const [modal, setModal] = useState({
    show: false,
    text: "",
  });
  const onItemClick = (text) => {
    console.log(`onItemClick text ${text}`);
    setModal({
      show: true,
      text: text,
    });
  };

  const closeModal = () => {
    setModal({
      show: false,
      text: "",
    });
  };
  const MODAL = getMdoal(modal, closeModal);
  return (
    <>
      <Card>
        <CardContent>
          <Typography component={"div"} variant="h5">
            Plan
          </Typography>
          <Typography component={"div"}>아이디어 / 기획</Typography>
          <Wrapper>
            {getCard(PLAN_ARR, "기획", onItemClick)}
            아이템 선정
            {getCard(CLIENT_ARR, "공모전")}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flex: 1, margin: "5px" }}>
                시나리오 정의
                {getCard(UX_ARR, "")}
              </div>
              <div style={{ flex: 1, margin: "5px" }}>
                개발 계획
                {getCard(DEVELOP_ARR, "")}
              </div>
            </div>
          </Wrapper>
        </CardContent>
      </Card>
      {MODAL}
    </>
  );
};

export default Plan;
