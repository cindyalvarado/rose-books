import PageContainer from "containers/page-container"
import SourceSorciereVideo from "assets/videos/source-sorciere.mp4"
import VideoBg from 'assets/video-bg.png'
import { Text } from "components/text"
import Birds from "./birds"
import Points from "./points"
import PointsBottom from "./points-bottom"

import "./styles.css"
import Pineapple from "./pineapple"

const Announcements = () => {
  return (
    <PageContainer className="announcements-page">
      <div className="video-wrapper d-flex justify-content-center">
        <Birds />
        <Points />
        <Text text="bandes annonces" className="announcements-text" />
        <img src={VideoBg} className="video-bg" alt="video-bg" />
        <video controls className="announcements-video">
          <source src={SourceSorciereVideo} />
        </video>
        <PointsBottom />
        <Pineapple />
      </div>
    </PageContainer>
  );
}

export default Announcements;