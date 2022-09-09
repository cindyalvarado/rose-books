import TopBar from 'containers/top-bar';
import './styles.css'

const PageContainer = ({ children, className }) => {
  return (
    <div className={`page-container ${className}`}>
      <TopBar/>
      {children}
    </div>
  )
}

export default PageContainer;