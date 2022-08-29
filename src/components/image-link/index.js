import './styles.css'

const ImageLink = ({ children, className, style }) => {
  return (
    <a
      className={`image-link d-flex align-items-center justify-content-center ${className}`}
      style={{...style}}
    >
      {children}
    </a>
  )
}

export default ImageLink;