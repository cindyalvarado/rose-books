import { Text } from "components/text";
import PageContainer from "containers/page-container"
import TeamTitle from "./moon";
import "./styles.css"
import TeamPictures from "./team-pictures";

const Team = () => {
  return (
    <PageContainer className="team-page">
      <TeamTitle />
      <TeamPictures />
    </PageContainer>
  );
}

export default Team;