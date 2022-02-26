import { Card, CardContent, Grid } from "@material-ui/core";
import { Box, Button, Modal } from "@mui/material";
export const getCardComponent = (client, onItemClick) => {
  const onClientClick = (client) => {
    if (client.url) {
      window.open(client.url, "_blank");
    } else if (client.text) {
      onItemClick(client.text);
    }
  };
  const backgroundColor = client.url || client.text ? "white" : "#EAE4E3";
  return (
    <div style={{ width: "120px", justifyContent: "center" }}>
      <Card
        style={{ background: backgroundColor }}
        name={client.name}
        onClick={() => {
          onClientClick(client);
        }}
      >
        <CardContent>
          <div style={{ textAlign: "center" }}>{client.name}</div>
        </CardContent>
      </Card>
    </div>
  );
};
export const getCard = (arr, name, onItemClick) => {
  return (
    <Card>
      <CardContent>
        <div style={{ margin: 5 }}>{name}</div>
        <Grid container spacing={2} style={{ justifyContent: "center" }}>
          {arr.map((client) => {
            return <Grid item>{getCardComponent(client, onItemClick)}</Grid>;
          })}
        </Grid>
      </CardContent>
    </Card>
  );
};
export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const getMdoal = (modal, close) => {
  return (
    <Modal open={modal.show}>
      <Box component="form" sx={modalStyle} noValidate>
        {modal.text &&
          modal.text.map((t) => {
            return <div>{t}</div>;
          })}

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={close}>확인</Button>
        </div>
      </Box>
    </Modal>
  );
};
