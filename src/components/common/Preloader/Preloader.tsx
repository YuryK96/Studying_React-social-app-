import preloader from "../../../assets/img/preloader.svg";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

const Preloader: React.FC = ({}) => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box>
        {" "}
        <Box component={"img"} src={preloader} />
      </Box>
    </Container>
  );
};

export default Preloader;
