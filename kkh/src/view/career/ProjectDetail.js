
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ReactPlayer from "react-player";
const ProjectDetail = (props) => {
  const { row } = props;
  console.log(`row project ${JSON.stringify(row.project)}`);
  return (
    <>
      {row.resource.VIDEO.map((item) => {
        return <ReactPlayer width="100%" height="500px" className="react-player" url={item} controls={true} />;
      })}

      <ImageList sx={{ width: "100%", height: "100%" }} cols={row.resource.cols}>
        {row.resource.IMAGE.map((item) => (
          <ImageListItem key={item}>
            <img
              alt="img"
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList sx={{ width: "100%", height: "100%" }} cols={row.resource.cols2}>
        {row.resource.IMAGE2 &&
          row.resource.IMAGE2.map((item) => (
            <ImageListItem key={item}>
              <img
                alt="img"
                src={`${item}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
      </ImageList>
    </>
  );
};

export default ProjectDetail;
