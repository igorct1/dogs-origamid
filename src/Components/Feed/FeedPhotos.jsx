import React from "react";
import { FeedPhotosItem } from "./FeedPhotosItem";
import { useFetch } from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import { Error } from "../Helper/Error";
import styles from "./FeedPhotos.module.css";
import { Loading } from "../Helper/Loading";

export const FeedPhotos = ({ page, setModalPhoto, user, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({
        page,
        total,
        user,
      });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (loading) return <Loading />;
  if (error) return <Error errorMessage={error} />;
  if (data)
    return (
      <ul className={styles.feed}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};
