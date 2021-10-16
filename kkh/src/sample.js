export const getTimeLineList = () => {
  const list = [];
  list.push(
    getTimeLineData("2013-2021", "LG전자", "LG Weather", "Android App")
  );
  list.push(getTimeLineData("2013-2021", "LG전자", "LG QVoice", "Android App"));
  return list;
};

const getTimeLineData = (year, company, project, job) => {
  return {
    year: year,
    company: company,
    project: project,
    job: job,
  };
};
