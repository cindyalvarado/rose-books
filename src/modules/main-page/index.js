import Text from "components/text";
import PageContainer from "containers/page-container"
import Books from "./books";
import RosePortrait from "./rose-portrait";
import Editors from "./editors";
import Trailers from "./trailers";
import Newsletters from "./newsletters";
import "./main-page.css"

const MainPage = () => {
  return (
    <PageContainer className="main-container">
      <Text text='Rose K. Beira' />
      <div className="d-flex flex-column-reverse flex-lg-row mt-5">
        <Books />
        <RosePortrait />
      </div>
      <div className="d-flex flex-column-reverse flex-lg-row mt-2">
        <Editors/>
        <Trailers/>
      </div>
      <div className="d-flex align-items-end justify-content-end mt-5">
        <Newsletters/>
      </div>
    </PageContainer>
  );
}

export default MainPage;