import { Box } from "@mui/material";
import Main from "../../../components/client/Resume/Main";
import Heading from "../../../components/global/Heading";
import {
  EmojiEvents,
  Interests as InterestsIcon,
  Language,
  ManageAccounts,
  PersonSearch,
  School,
  SettingsInputSvideo,
  VolunteerActivism,
  WorkHistory,
} from "@mui/icons-material";
import ResumeHeading from "../../../components/client/Resume/ResumeHeading";
import WorkExperience from "@/components/client/Resume/WorkExperience";
import Education from "../../../components/client/Resume/Education";
import Skills from "../../../components/client/Resume/Skills";
import OrgSkills from "../../../components/client/Resume/OrgSkills";
import Specialization from "../../../components/client/Resume/Specialization";
import Volunteering from "../../../components/client/Resume/Volunteering";
import Languages from "../../../components/client/Resume/Languages";
import Interests from "../../../components/client/Resume/Interests";

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
      <ResumeHeading title={"Volunteer"} icon={<VolunteerActivism />} />
      <Volunteering />
      <ResumeHeading title={"Languages"} icon={<Language />} />
      <Languages />
      <ResumeHeading title={"Interests"} icon={<InterestsIcon />} />
      <Interests />
      <br />
    </Box>
  );
};

export default Resume;
