import Text from "components/text";
import Books from "./books";
import "./main-page.css"
import RosePortrait from "./rose-portrait";
import PageContainer from "components/page-container"

const MainPage = () => {
  return (
    <PageContainer className="main-container">
      <Text text='Rose K. Beira' />
      <div className="d-flex flex-column-reverse flex-lg-row mt-5">
        <Books />
        <RosePortrait />
      </div>
    </PageContainer>
  );
}

export default MainPage;