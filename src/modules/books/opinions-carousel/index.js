import { useSinglePrismicDocument } from "@prismicio/react";
import { isEmpty, map } from "lodash";
import { useEffect, useState } from "react";
import Carousel, { CarouselItem } from "./Carousel";

export default function OpinionsCarousel() {

  const [data] = useSinglePrismicDocument('opinions-amazon');
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    //If the opinions value changes, do something
    if (!isEmpty(data)) {
      setOpinions(data?.data?.body[0]?.items)
    }
  }, [data]);

  return (
    <Carousel>
      {map(opinions, (opinion, key) =>
        <CarouselItem
          user={opinion?.user[0]?.text}
          date={opinion?.date}
          stars={opinion?.stars}
          title={opinion?.title[0]?.text}
          description={opinion?.description[0]?.text}
          key={key}
        />
      )}
    </Carousel>
  );
}