import { TextBold, TextNormal } from "components/text";
import PageContainer from "containers/page-container"
import Books from "./books";
import RosePortrait from "./rose-portrait";
import Editors from "./editors";
import Trailers from "./trailers";
import Newsletters from "./newsletters";
import BirdsSubtitle from "./birds";
import "./main-page.css"
import Events from "./events";

const MainPage = () => {
  return (
    <PageContainer className="main-container">
      <TextBold className="main-title" text="Rose K. Beira" />
      <TextNormal className="main-subtitle" text="« La magie doit exister. Sinon, la vie n'a aucun sens. »" />
      <BirdsSubtitle />
      <div className="d-flex flex-column-reverse flex-lg-row mt-5">
        <Books />
        <RosePortrait />
      </div>
      <div className="d-flex flex-column-reverse flex-lg-row mt-2">
        <Editors />
        <Trailers />
      </div>
      <div className="d-flex flex-column flex-lg-row mt-1">
        <Events />
        <Newsletters />
      </div>
    </PageContainer>
  );
}

export default MainPage;