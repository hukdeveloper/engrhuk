import { Box } from "@mui/material";
import Main from "../../components/client/Home/Main";
import Heading from "../../components/global/Heading";
import { Diversity3, Settings } from "@mui/icons-material";
import Services from "../../components/client/Home/Services";
import Testimonials from "../../components/client/Home/Testimonials";
import Clients from "../../components/client/Home/Clients";

export default function Home() {
  return (
    <Box display="flex" flexDirection="column">
      <Main />
      <Heading
        title="Services"
        desc={"I Know That Strong Development Skills Drive Business Success"}
        icon={<Settings />}
      />
      <Services />
      <Heading
        title="Testimonials"
        desc={"Know What Others Say About me - Valuable Reviews"}
        icon={<Diversity3 />}
      />
      <Testimonials />
      <Clients />
      <br />
    </Box>
  );
}
