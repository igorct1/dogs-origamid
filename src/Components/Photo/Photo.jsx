import React from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET } from "../../api";
import { useFetch } from "../../Hooks/useFetch";
import { Loading } from "../Helper/Loading";
import { Error } from "../Helper/Error";
import { PhotoContent } from "./PhotoContent";
import { Head } from "../Helper/Head";

export const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error errorMessage={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;
};
