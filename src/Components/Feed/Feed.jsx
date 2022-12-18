import React from "react";
import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";
import { PropTypes } from "prop-types";

export const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
        }
        setTimeout(() => {
          wait = false;
        }, 1000);
      }
    }

    const events = ["scroll", "wheel"];
    events.forEach((eachEvent) =>
      window.addEventListener(eachEvent, infiniteScroll)
    );
    return () => {
      // const events = ["scroll", "wheel"];
      events.forEach((eachEvent) =>
        window.removeEventListener(eachEvent, infiniteScroll)
      );
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          setModalPhoto={setModalPhoto}
          page={page}
          user={user}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};
Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
