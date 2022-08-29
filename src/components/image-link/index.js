const ImageLink = ({ children, className }) => {
  return (
    <a
      className={`d-flex align-items-center justify-content-center ${className}`}
      style={{
        flex: 1,
        position: 'relative'
      }}
    >
      {children}
    </a>
  )
}

export default ImageLink;