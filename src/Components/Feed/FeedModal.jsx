import React from "react";
import { PHOTO_GET } from "../../api";
import { useFetch } from "../../Hooks/useFetch";
import { Error } from "../Helper/Error";
import { Loading } from "../Helper/Loading";
import { PhotoContent } from "../Photo/PhotoContent";

import styles from "./FeedModal.module.css";

export const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  function handleOutsideClick({ target, currentTarget }) {
    if (target === currentTarget) setModalPhoto(null);
  }

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    const { response, json } = request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error errorMessage={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};
