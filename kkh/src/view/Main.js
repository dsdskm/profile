import { Box, Tab, Tabs } from "@material-ui/core";
import { TabContext, TabPanel } from "@mui/lab";
import { useState } from "react";
import Process from "./process/Process";
import Career from "./career/Career";

const Main = () => {
  const TAB_ARR = ["Career"];
  // const TAB_ARR = ["Career", "Process", "Study", "Reference"];
  const [category, setCategory] = useState(TAB_ARR[0]);
  const handleChange = (_, v) => {
    setCategory(v);
  };

  const updateContent = () => {};

  updateContent();
  return (
    <>
      <div style={{ margin: "5%" }}>
        <TabContext value={category}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={category} onChange={handleChange}>
              {TAB_ARR.map((t) => {
                return <Tab key={t} label={t} value={t} />;
              })}
            </Tabs>
          </Box>
          <TabPanel value={TAB_ARR[0]} index={0}>
            <Career />
          </TabPanel>
          <TabPanel value={TAB_ARR[1]} index={1}>
            <Process />
          </TabPanel>
          <TabPanel value={TAB_ARR[2]} index={2}>
            Study
          </TabPanel>
          <TabPanel value={TAB_ARR[3]} index={3}>
            Referehce
          </TabPanel>
        </TabContext>
      </div>
    </>
  );
};

export default Main;
