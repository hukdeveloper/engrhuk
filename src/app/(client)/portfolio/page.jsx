import { Box } from "@mui/material";
import Main from "../../../components/client/Portfolio/Main";

const Portfolio = () => {
  return (
    <Box display="flex" flexDirection="column" p="0 10px" mt={{ xs: 1, md: 5 }}>
      <Main />
      <br />
    </Box>
  );
};

export default Portfolio;
