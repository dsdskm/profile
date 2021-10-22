export const getTimeLineList = () => {
  const list = [];
  list.push(
    getTimeLineData(
      "2013-2021",
      "LG전자",
      "LG Weather 앱",
      "날씨 정보 제공 어플리케이션",
      "Android"
    )
  );
  list.push(
    getTimeLineData(
      "2013-2021",
      "LG전자",
      "LG QVoice 앱",
      "음성 인식 대화형 서비스",
      "Android"
    )
  );
  list.push(
    getTimeLineData(
      "2013-2021",
      "LG전자",
      "배송로봇 탑재 앱",
      "배송로봇 명령 및 상태 제공 어플리케이션",
      "Android(Kotlin)"
    )
  );
  list.push(
    getTimeLineData(
      "2013-2021",
      "LG전자",
      "바리스타 제어 앱",
      "바리스타 로봇 연동 및 로봇 상태 제공 어플리케이션",
      "Android(Kotlin)"
    )
  );
  list.push(
    getTimeLineData(
      "2013-2021",
      "LG전자",
      "로봇 주문 관리 앱",
      "고객의 주문을 앱을 통해 확인하고, 주문 관리 및 로봇에게 명령을 전달하는 어플리케이션",
      "Flutter, Firebase"
    )
  );
  list.push(
    getTimeLineData(
      "2013-2021",
      "LG전자",
      "로봇 주문 관리 사이트",
      "고객의 주문을 앱을 통해 확인하고, 주문 상태를 관리하는 웹 사이트",
      "React, Firebase"
    )
  );
  list.push(
    getTimeLineData(
      "2013-2021",
      "개인 프로젝트",
      "FindGo",
      "위치 기반 미션 수행 어플리케이션 및 미션 관리 사이트",
      "React, Android(Kotlin), Firebase"
    )
  );
  list.push(
    getTimeLineData(
      "2013-2021",
      "개인 프로젝트",
      "무장애IN성동구",
      "위치 기반 무장애 시설 정보 제공 어플리케이션",
      "Flutter, Firebase"
    )
  );
  return list;
};

const getTimeLineData = (year, company, project, description, job) => {
  return {
    year: year,
    company: company,
    description: description,
    project: project,
    job: job,
  };
};
