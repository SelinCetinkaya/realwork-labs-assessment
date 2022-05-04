import React from "react";
import { useCities } from "../hooks/useCities";
import WarningsList from "../components/WarningsList";
import Card from "@mui/material/Card";
import "./style.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ReportIcon from "@mui/icons-material/Report";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

function CitiesList({ data, dataType }) {
  const { cities } = useCities({ data, dataType });

  const key = {
    skiCity: "Ski Cities",
    beachCity: "Beach Cities",
  };

  return (
    <Card className="card">
      <h2>{key[dataType]}</h2>
      <List>
        {cities.map((city) => {
          return (
            <div key={city.name}>
              <ListItem className="list-item">
                <div className="contents">
                  <span>{city.name}</span>
                  <span>Temperature: {city.temp} degrees farenheight. </span>
                  <span>Wind speed: {city.wind_speed} mph. </span>
                </div>
                {city.warnings.length ? (
                  <>
                    {/* title attribute defined in separate component since warnings is an array */}
                    <Tooltip title={<WarningsList warnings={city.warnings} />}>
                      <IconButton>
                        <ReportIcon sx={{ color: "red" }} />
                      </IconButton>
                    </Tooltip>
                  </>
                ) : (
                  <CheckIcon sx={{ color: "green" }} />
                )}
              </ListItem>
              <hr />
            </div>
          );
        })}
      </List>
    </Card>
  );
}

export default CitiesList;
