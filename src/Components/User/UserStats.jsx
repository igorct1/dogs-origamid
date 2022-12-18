import React from "react";
import { Head } from "../Helper/Head";
import { useFetch } from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import { Loading } from "../Helper/Loading";
import { Error } from "../Helper/Error";
import { UserStatsGraphs } from "./UserStatsGraphs";

export const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = localStorage.getItem("token");
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    getData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error errorMessage={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};
