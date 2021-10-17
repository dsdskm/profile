export const getTimeLineList = () => {
  const list = [];
  list.push(
    getTimeLineData("2013-2021", "LG전자", "LG Weather 앱", "날씨 정보 제공 어플리케이션","Android 개발")
  );
  list.push(getTimeLineData("2013-2021", "LG전자", "LG QVoice 앱", "음성 인식 대화형 서비스","Android 개발"));
  list.push(getTimeLineData("2013-2021", "LG전자", "배송로봇 탑재 앱","배송로봇 명령 및 상태 제공 어플리케이션", "Android(Kotlin) 개발"));
  list.push(getTimeLineData("2013-2021", "LG전자", "바리스타 제어 앱","바리스타 로봇 연동 및 로봇 상태 제공 어플리케이션", "Android(Kotlin) 개발"));
  list.push(getTimeLineData("2013-2021", "LG전자", "로봇 주문 관리 앱", "Flutter 개발"));
  list.push(getTimeLineData("2013-2021", "LG전자", "로봇 주문 관리 사이트", "React 개발"));
  list.push(getTimeLineData("2013-2021", "개인 프로젝트", "FindGo", "React, Android"));
  return list;
};

const getTimeLineData = (year, company, project,description, job) => {
  return {
    year: year,
    company: company,
    description:description,
    project: project,
    job: job,
  };
};
