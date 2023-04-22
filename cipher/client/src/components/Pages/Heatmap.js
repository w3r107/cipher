import { Container } from "react-bootstrap";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./Heatmap.css";

const Heatmap = () => {
  return (
    <>
      <Container>
        <h1>Cipher Map</h1>
        <CalendarHeatmap
          startDate={new Date("2016-01-01")}
          endDate={new Date("2016-12-31")}
          values={[
            { date: "2016-03-01", count: 1 },
            { date: "2016-03-02", count: 1 },
            { date: "2016-03-03", count: 1 },
            { date: "2016-03-04", count: 1 },
            { date: "2016-03-05", count: 1 },
            { date: "2016-03-06", count: 1 },

            { date: "2016-02-16", count: 1 },
            { date: "2016-02-23", count: 1 },
            { date: "2016-03-08", count: 1 },
            { date: "2016-03-15", count: 1 },

            { date: "2016-04-05", count: 1 },
            { date: "2016-04-06", count: 1 },
            { date: "2016-04-07", count: 1 },
            { date: "2016-04-08", count: 1 },
            { date: "2016-04-09", count: 1 },
            { date: "2016-04-16", count: 1 },
            { date: "2016-04-23", count: 1 },
            { date: "2016-04-26", count: 1 },
            { date: "2016-04-27", count: 1 },
            { date: "2016-04-28", count: 1 },
            { date: "2016-04-29", count: 1 },
            { date: "2016-04-30", count: 1 },

            { date: "2016-05-10", count: 1 },
            { date: "2016-05-11", count: 1 },
            { date: "2016-05-12", count: 1 },
            { date: "2016-05-19", count: 1 },
            { date: "2016-05-26", count: 1 },
            { date: "2016-06-02", count: 1 },
            { date: "2016-06-03", count: 1 },
            { date: "2016-06-04", count: 1 },
            { date: "2016-05-28", count: 1 },
            { date: "2016-05-21", count: 1 },
            { date: "2016-05-14", count: 1 },

            { date: "2016-06-14", count: 1 },
            { date: "2016-06-15", count: 1 },
            { date: "2016-06-16", count: 1 },
            { date: "2016-06-17", count: 1 },
            { date: "2016-06-23", count: 1 },
            { date: "2016-06-30", count: 1 },
            { date: "2016-07-05", count: 1 },
            { date: "2016-07-06", count: 1 },
            { date: "2016-07-07", count: 1 },
            { date: "2016-07-08", count: 1 },
            { date: "2016-07-09", count: 1 },
            { date: "2016-07-09", count: 1 },
            { date: "2016-06-18", count: 1 },
            { date: "2016-05-24", count: 1 },
            { date: "2016-05-31", count: 1 },

            { date: "2016-04-06", count: 1 },
            { date: "2016-05-01", count: 1 },
            { date: "2016-05-01", count: 1 },
            { date: "2016-01-03", count: 4 },
            { date: "2016-01-06", count: 2 },
            // ...and so on
          ]}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-scale-${value.count}`;
          }}
        />
      </Container>
    </>
  );
};

export default Heatmap;
