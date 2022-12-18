import React from "react";
import styles from "./UserStatsGraph.module.css";
import { VictoryPie } from "victory";

export const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [totalAccess, setTotalAccess] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotalAccess(
      data
        .map(({ acessos }) => Number(acessos))
        .reduce((acc, item) => {
          return acc + item;
        }, 0)
    );
    setGraph(graphData);
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {totalAccess}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ padding: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
    </section>
  );
};
