
import {Typography } from "@material-ui/core";
import { PROFILE_DATA } from "../../sample";

const Profile = () => {
  const PROFILE = (
    <>
      {PROFILE_DATA.map((profile) => {
        return (
          <Typography component={"div"} key="name">
            {profile}
          </Typography>
        );
      })}

      <Typography component={"div"} key="age">
        {PROFILE_DATA.age}
      </Typography>
      <Typography component={"div"} key="country">
        {PROFILE_DATA.country}
      </Typography>
      <Typography component={"div"} key="country">
        {PROFILE_DATA.email}
      </Typography>
    </>
  );
  return PROFILE;
};

export default Profile;
