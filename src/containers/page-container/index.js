import TopBar from 'containers/top-bar';
import Footer from 'containers/footer';
import './styles.css'

const PageContainer = ({ children, className }) => {
  return (
    <div className={`page-container ${className}`}>
      <TopBar />
      {children}
      <Footer />
    </div>
  )
}

export default PageContainer;