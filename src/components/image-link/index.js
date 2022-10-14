import { Link } from 'react-router-dom';
import './styles.css'

const ImageLink = ({ children, className, style, to = "/" }) => {
  return (
    <Link
      className={`image-link d-flex align-items-center justify-content-center ${className}`}
      style={{ ...style }}
      to={to}
    >
      {children}
    </Link>
  )
}

export default ImageLink;