import { useState } from "react";
import { Table, Collapse } from "react-bootstrap";
import ComNav from "../ComNav";

const ANDROID_LINES = ["line1"];
const Android = () => {
  const [openStatus, setOpenStatus] = useState({
    android: {
      line1: false,
    },
  });
  const onRowClock = (row) => {
    switch (row) {
      case ANDROID_LINES[0]:
        openStatus.android.line1 = !openStatus.android.line1;
        break;
      default:
        break;
    }
    setOpenStatus({ ...openStatus });
  };
  const android_01 = (
    <>
      <p>Android 기본 개념</p>
      <ul>
        <li>1. 앱은 여러 진입점을 제공</li>
        -> 앱 아이콘 실행, 알림이나 다른 앱, WorkManager 등
        <li>2. 앱은 다양한 기기에 맞게 변경</li>
        -> 다양한 화면 크기에 따라 다양한 레이아웃을 만들 수 있다
      </ul>
    </>
  );
  const android_02 = (
    <>
      <p>Android Project</p>
      <ul>
        <div>Proejct 중요 파일</div>
        <li>MainActivity</li>
        <li>activity_main.xml</li>
        <li>AndroidManifext.xml</li>
        <li>
          build.gradle
          <ul>
            <li>Project build gradle</li>
            <li>App build gradle</li>
          </ul>
        </li>
      </ul>
    </>
  );
  const android_03 = (
    <>
      <p>사용자 인터페이스 빌드</p>
      <ul>
        <li>View 구조</li>
      </ul>
      <img
        width="30%"
        height="30%"
        src="https://developer.android.com/images/viewgroup_2x.png?hl=ko"
      />
    </>
  );
  const android_04 = (
    <>
      <p>애플리케이션 기본 항목</p>
      <ul>
        <p>Android 보안 기능</p>
        <li>
          Android 운영체제는 멀티유저 Linux 시스템으로, 여기서 각 앱은 각기 다른
          사용자와 같습니다.
        </li>
        <li>
          기본적으로 시스템이 각 앱에 고유한 Linux ID를 할당합니다(이 ID는
          시스템만 사용할 수 있으며 앱에서는 인식하지 못함). 시스템은 앱 안의
          모든 파일에 대해 권한을 설정하여 해당 앱에 할당된 사용자 ID만 이에
          액세스할 수 있도록 합니다.
        </li>
        <li>
          각 프로세스에는 자체적인 가상 머신(VM)이 있고, 그렇기 때문에 한 앱의
          코드가 다른 앱과는 격리된 상태로 실행됩니다.
        </li>
        <li>
          기본적으로 모든 앱이 앱 자체의 Linux 프로세스에서 실행됩니다. Android
          시스템은 앱의 구성 요소 중 어느 하나라도 실행해야 하는 경우 프로세스를
          시작하고, 더 이상 필요 없거나 시스템이 다른 앱을 위해 메모리를
          복구해야 하는 경우 해당 프로세스를 종료합니다.
        </li>
        <div>다른 앱과 데이터를 공유 및 시스템 서버 엑세스</div>
        <li>두 개의 앱이 같은 Linux 사용자 ID를 공유</li>
        <li>연락처,SMS,SD 카드,카메라,블루투스 권한 요청</li>
      </ul>
    </>
  );
  const android_05 = (
    <>
      <p>앱 리소스</p>
      <ul>
        <p>리소스 코드</p>
        <li>앱 리소스는 항상 코드에서 외부화하여 독립적으로 유지 관리</li>
        <li>
          앱 리소스를 외부화하면 프로젝트 R클래스에서 발생하는 리소스ID로 액세스
        </li>
        <li>
          <p>res 디렉토리</p>
          <ul>
            <li>animator</li>
            <li>anim</li>
            <li>color</li>
            <li>drawable</li>
            <li>mipmap</li>
            <li>layout</li>
            <li>menu</li>
            <li>raw</li>
            <li>values</li>
            <li>xml</li>
            <li>font</li>
          </ul>
        </li>
        <p>대체 리소스</p>
        <ul>
          <li>
            res/에 [resource-name]-[config_qualifier] 형식으로 디렉토리 관리
          </li>
          <li>
            <p>config_qualifier 종류</p>
            <ul>
              <li>MCC & MNC</li>
              <li>언어 및 지역</li>
              <li>레이아웃 방향</li>
              <li>smallestWidth</li>
              <li>이용 가능한 너비</li>
              <li>이용 가능한 높이</li>
              <li>화면 크기</li>
              <li>화면 비율</li>
              <li>원형 화면</li>
              <li>넓은 색 공간</li>
              <li>HDR(High Dynamic Range)</li>
              <li>화면 방향</li>
              <li>UI 모드</li>
              <li>야간 모드</li>
              <li>화면 픽셀 밀도(dpi)</li>
              <li>터치스크린 유형</li>
              <li>키보드 가용성</li>
              <li>기본 텍스트 입력 방법</li>
              <li>기본 비터치 탐색 방법</li>
              <li>플랫폼 버전(API 레벨)</li>
            </ul>
          </li>
        </ul>
        <p>앱 리소스 액세스</p>
        <ul>
          <li>코드 - [package_name.]R.[resource_type].[resource_name]</li>
          <li>xml - [package_name:]R.[resource_type].[resource_name]</li>
          <li>
            xml 스타일 참조 - ?[package_name:][resource_type/][resource_name] :
            ?android:textColorSecondary
          </li>
        </ul>
        <p>런타임 리소스 사용 결정</p>
        <ul>
          <ol>기기 구성과 충돌하는 리소스 파일 제거</ol>
          <ol>우선순위가 높은 한정자 선택</ol>
          <ol>한정자를 포함하지 안흔 디렉토리 제거</ol>
        </ul>
        <p>구성 변경 처리</p>
        <ul>
            <li>기기 구성이 런타임에 변경될 수 있다</li>
            <li>Activity onDestroy 호출되고 onCreate 호출</li>
            <li>onSaveInstanceState(),ViewModel을 이용하여 UI 복원 </li>
            <li>configChanges에 포함하면 구성이 변경되어도 재시작하지 않는다. onConfigurationChanged() 호출 </li>
        </ul>
      </ul>
    </>
  );
  return (
    <>
      <ComNav>
        <div>Android 개발자 가이드</div>
        <Table striped bordered hover>
          <colgroup>
            <col width="20%" />
            <col width="50%" />
            <col width="30%" />
          </colgroup>
          <tr>
            <th>title</th>
            <th>link</th>
            <th>description</th>
          </tr>
          <tr onClick={() => onRowClock(ANDROID_LINES[0])}>
            <td>basic</td>
            <td>
              <a
                href="https://developer.android.com/training/basics/firstapp?hl=ko"
                target="_blank"
              >
                https://developer.android.com/training/basics/firstapp?hl=ko
              </a>
            </td>
            <td>Hello World Project 가이드</td>
          </tr>
          <tr>
            <td colSpan="3">
              <Collapse in={openStatus.android.line1}>
                <div>
                  {android_01}
                  {android_02}
                  {android_03}
                  {android_04}
                  {android_05}
                </div>
              </Collapse>
            </td>
          </tr>
        </Table>
      </ComNav>
    </>
  );
};

export default Android;
