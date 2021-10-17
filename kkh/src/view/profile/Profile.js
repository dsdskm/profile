import { Table } from "react-bootstrap";
import { getTimeLineList } from "../../sample";
import ComNav from "../ComNav";

const Profile = () => {
  const timelineList = getTimeLineList();
  return (
    <>
      <ComNav>
        <div>Profile</div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>기간</th>
              <th>회사</th>
              <th>프로젝트명</th>
              <th>설명</th>
              <th>주요 업무</th>
            </tr>
          </thead>
          <tbody>
            {timelineList.map((data) => {
              return (
                <tr>
                  <td>{data.year}</td>
                  <td>{data.company}</td>
                  <td>{data.project}</td>
                  <td>{data.description}</td>
                  <td>{data.job}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </ComNav>
    </>
  );
};

export default Profile;
