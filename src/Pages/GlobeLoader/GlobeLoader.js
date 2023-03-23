import React, { useEffect } from "react";
import "./globeLoader.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldIndiaLow from "@amcharts/amcharts4-geodata/worldIndiaLow";

const GlobeLoader = () => {
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chart = am4core.create("chartdiv", am4maps.MapChart);

  // Set map definition
  chart.geodata = am4geodata_worldIndiaLow;

  // Set projection
  chart.projection = new am4maps.projections.Orthographic();
  chart.panBehavior = "rotateLongLat";
  chart.deltaLatitude = -20;
  chart.padding(20, 20, 20, 20);
  chart.events.disableType("down");
  chart.events.disableType("up");
  chart.events.disableType("hit");

  // Create map polygon series
  var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

  // Make map load polygon (like country names) data from GeoJSON
  polygonSeries.useGeodata = true;
  //polygonSeries.include = ["BR", "UA", "MX", "CI"];

  // Configure series
  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = "{name}";
  polygonTemplate.fill = am4core.color("#1B496B");
  polygonTemplate.stroke = am4core.color("#000033");
  polygonTemplate.strokeWidth = 0.5;
  polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
  polygonTemplate.url = "https://www.datadrum.com/main.php?package={id}";
  polygonTemplate.urlTarget = "_blank";
  polygonTemplate.events.disableType("hit");
  polygonTemplate.events.disableType("up");
  polygonTemplate.events.disableType("down");

  chart.seriesContainer.events.disableType("doublehit");
  chart.chartContainer.background.events.disableType("doublehit");
  chart.seriesContainer.events.disableType("hit");
  chart.chartContainer.background.events.disableType("hit");

  var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
  graticuleSeries.mapLines.template.line.stroke = am4core.color("#fff");
  graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
  graticuleSeries.fitExtent = false;

  chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
  chart.backgroundSeries.mapPolygons.template.polygon.fill =
    am4core.color("#ffffff");

  // Create hover state and set alternative fill color
  //   var hs = polygonTemplate.states.create("hover");
  //   hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

  let as = polygonTemplate.states.create("active");
  as.properties.fill = am4core.color("#FF6633");

  chart.events.on("ready", function (ev) {
    let india = polygonSeries.getPolygonById("IN");

    // Set active state
    setTimeout(function () {
      india.isActive = true;
    }, 500);
  });
  let animation;
  setTimeout(function () {
    animation = chart.animate(
      [
        {
          property: "deltaLongitude",
          to: -80,
        },
        {
          property: "deltaLatitude",
          to: -20,
        },
      ],
      2000
    );
  }, 1000);

  // document.getElementById("chartdiv").addEventListener("click", (e) => {
  //   e.preventDefault();
  // });

  setTimeout(() => {
    document.getElementById("chartdiv").style.display = "none";
  }, 4000);

  //   let animation;
  //   setTimeout(function () {
  //     animation = chart.animate(
  //       [
  //         { property: "deltaLongitude", to: -80 },
  //         { property: "deltaLatitude", to: -20 },
  //       ],
  //       20000000
  //     );
  //   }, 3000);

  //   chart.animate(
  //     [
  //       {
  //         property: "deltaLongitude",
  //         to: -80,
  //       },
  //       {
  //         property: "deltaLatitude",
  //         to: -20,
  //       },
  //     ],
  //     2000
  //   );
  //   chart.seriesContainer.events.on("down", function () {
  //     //  animation.stop();
  //   });

  return <div id="chartdiv"></div>;
};

export default GlobeLoader;
