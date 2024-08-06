import { Send as SendIcon } from "@mui/icons-material";
import { Button, ButtonGroup, IconButton, Stack } from "@mui/material";

const MuiButton = () => {
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <Button variant="text" href="https://www.yandex.com">
            Text
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button color="success">Success</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            disableRipple
            onClick={() => alert("Clicked!")}
          >
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation>
            Send
          </Button>
          <IconButton color="primary" size="large" aria-label="send">
            <SendIcon />
          </IconButton>
        </Stack>
        <Stack direction="row">
          <ButtonGroup
            variant="contained"
            color="secondary"
            size="small"
            orientation="vertical"
            aria-label="alignment button group"
          >
            <Button onClick={() => alert("Left click")}>Left</Button>
            <Button onClick={() => alert("Center click")}>Center</Button>
            <Button onClick={() => alert("Right click")}>Right</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiButton;
