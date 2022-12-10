import NewslettersImage from "assets/trees.png"
import ImageLink from "components/image-link"
import { Text } from "components/text"
import { useEffect, useState } from "react"
import './styles.css'

const Newsletters = ({ className }) => {
  const windowWidth = useWindowWidth();

  function useWindowWidth() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState(0);
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize(window.innerWidth);
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  return (
    <ImageLink>
      <Text className="title-newsletters" text={windowWidth > 550 ? "la newsletter des 4 saisons" : "la newsletter"} />
      <img style={{ maxWidth: '100vw', minHeight: 140 }} src={NewslettersImage} alt="newsletter-img" />
    </ImageLink>
  )
}

export default Newsletters