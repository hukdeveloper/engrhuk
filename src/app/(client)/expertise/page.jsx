import { Box } from "@mui/material";
import { montserrat } from "../../../utils/font";
import Heading from "../../../components/global/Heading";
import { Draw, FactCheck } from "@mui/icons-material";
import Skills from "../../../components/client/Expertise/Skills";
import Expertises from "../../../components/client/Expertise/Expertises";

const Expertise = () => {
  return (
    <Box display="flex" flexDirection="column" p="0 10px" mt={{ xs: 1, md: 5 }}>
      <span className={montserrat.className}>
        With 4+ years in Software and Web Development within a dynamic
        consulting setting, I have crafted websites using Nextjs, React,
        Material UI, Node.js, Express, and managed databases with MySQL and
        MongoDB. Proficient in JavaScript, SCSS, Bootstrap, Prime React, jQuery,
        jQuery UI, I have worked with various databases including Oracle,
        SQLite, and CMS platforms like WordPress. Skilled in version control
        with Git and GitHub, I bring a robust skill set to deliver effective
        solutions.
      </span>
      <br />
      <span className={montserrat.className}>
        As a software developer, I have designed and developed software using
        Java with database deployment using Java Derby, Oracle, and MySQL.
        Proficient in Java Swing and Java FX for design, I have also served as a
        Java instructor, guiding trainees in fundamental programming,
        object-oriented programming, C++, and database management systems.
      </span>
      <Heading
        title={"Development Skills"}
        desc={"Attractive design with perfect user experience"}
        icon={<Draw />}
      />
      <Skills />
      <Heading
        title={"Domain Expertises"}
        desc={"Bussiness-Ecommerce, Educational, Organizational & Enterprises"}
        icon={<FactCheck />}
      />
      <Expertises />
      <br />
    </Box>
  );
};

export default Expertise;
