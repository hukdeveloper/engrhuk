import { Box } from "@mui/material";
import Heading from "../../../components/global/Heading";
import { Telegram } from "@mui/icons-material";
import Main from "../../../components/client/Contact/Main";
import ContactBottom from "../../../components/client/Contact/ContactBottom";

const Contact = () => {
  return (
    <Box display="flex" flexDirection="column" p="0 10px" mt={1} gap={1}>
      <Heading
        icon={<Telegram />}
        title={"Contact"}
        desc={"Love to Hear From You, Get in Touch"}
      />
      <Main />
      <ContactBottom />
    </Box>
  );
};

export default Contact;
