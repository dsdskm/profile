import { Table } from "react-bootstrap";
import ComNav from "../ComNav";
import Android from "./Android";

const Study = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("id");
  console.log(`Study id ${id}`);
  if (id == "android") {
    return <Android />;
  }
  return (
    <>
      <ComNav>
        <div>Study</div>
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
          <tbody></tbody>
        </Table>
      </ComNav>
    </>
  );
};

export default Study;
