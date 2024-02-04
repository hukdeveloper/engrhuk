import { Box } from "@mui/material";
import Main from "../../../components/client/Resume/Main";
import Heading from "../../../components/global/Heading";
import {
  EmojiEvents,
  ManageAccounts,
  PersonSearch,
  School,
  SettingsInputSvideo,
  WorkHistory,
} from "@mui/icons-material";
import ResumeHeading from "../../../components/client/Resume/ResumeHeading";
import WorkExperience from "@/components/client/Resume/WorkExperience";
import Education from "../../../components/client/Resume/Education";
import Skills from "../../../components/client/Resume/Skills";
import OrgSkills from "../../../components/client/Resume/OrgSkills";
import Specialization from "../../../components/client/Resume/Specialization";

const Resume = () => {
  return (
    <Box display="flex" flexDirection="column" p="0 10px" mt={1} gap={2}>
      <Heading
        title={"About My Resume"}
        icon={<PersonSearch />}
        desc={"Educational, Work Experience and Other Details"}
      />
      <Main />
      <ResumeHeading title={"Work Experience"} icon={<WorkHistory />} />
      <WorkExperience />
      <ResumeHeading title={"Education"} icon={<School />} />
      <Education />
      <ResumeHeading
        title={"Development Skills"}
        icon={<SettingsInputSvideo />}
      />
      <Skills />
      <ResumeHeading
        title={"Organizational Skills"}
        icon={<ManageAccounts />}
      />
      <OrgSkills />
      <ResumeHeading title={"Specializations"} icon={<EmojiEvents />} />
      <Specialization />
      <br />
    </Box>
  );
};

export default Resume;
