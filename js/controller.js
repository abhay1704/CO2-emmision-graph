import * as model from "./model.js";
import ChoroplethView from "./view.js";
import timeScrollerView from "./timeScrollerView.js";
import BargraphView from "./barGraphView.js";
import NavBarView from "./navBarView.js";
import { API_KEY_STADIA } from "./config.js";
import navBarView from "./navBarView.js";

const initialPlot = async function (
  container,
  height,
  width,
  category = "Accumulative"
) {
  ChoroplethView.rendorSpinner();
  try {
    await model.loadData();
    plotMap(container, height, width, category);
    navBarView.navVisible();
  } catch (error) {
    console.log(error);
    ChoroplethView.rendorError('Failed to fetch geojson data.');
  }
};

const plotMap = async function (
  container,
  height,
  width,
  category,
  year = model.state.year
) {
  ChoroplethView.rendorSpinner();
  try {
    model.state.year = year;
    const data = getData(year, category);

    const layout = {
      mapbox: {
        center: { lon: 17.0, lat: 25.0 },
        zoom: 1.5,
        style: "open-street-map",
        fillOpacity: 1,
      },
      // autosize:true,
      light: {
        anchor: "viewport",
        color: "white",
        intensity: 1,
      },
      margin: { t: 0, l: 0, r: 0, b: 0 },
      width: parseFloat(width),
      height: parseFloat(height),
      hovermode: "closest",
      // Remove the coloraxis from the layout:
      coloraxis: {
        showscale: false,
      },
      hoverlabel: {
        bgcolor: "white",
        font_family: "Public Sans",
        align: "left",
      },
    };

    const config = {
      displayModeBar: false,
      responsive: true,
      showlegend: false,
    };
    ChoroplethView.clear();
    const plot = await Plotly.newPlot(container, data, layout, config);
    // plot.update_layout((coloraxis_showscale = false));
    console.log(width, height);
    controlClick(plot);
  } catch (error) {
    console.log(error);
    ChoroplethView.rendorError("Unable to render Graph");
  }
};

function controlClick(plot) {
  const year = model.state.year;
  plot.on("plotly_click", (d) => {
    BargraphView.rendorSpinner();

    try {
      const countryCode = d.points[0].location;

      const currCountry = {
        name: d.points[0].text,
        perCapita: d.points[0].custom_data,
        netEmmision: d.points[0].z,
      };

      const dataCO2 = model.state.annualCO2;

      const coal = Math.round(dataCO2["Coal"][year][countryCode] * 10, 2);
      const oil = Math.round(dataCO2["Oil"][year][countryCode] * 10, 2);
      const other = Math.round(dataCO2["Other"][year][countryCode] * 10, 2);
      const gas = Math.round(dataCO2["Gas"][year][countryCode] * 10, 2);

      const data = {
        Coal: coal,
        Oil: oil,
        Gas: gas,
        Other: other,
      };

      const trace = [
        {
          x: Object.keys(data),
          y: Object.values(data),
          text: Object.values(data).map(String),
          type: "bar",
          marker: { color: "rgb(55, 83, 109)" },
        },
      ];

      var layout = {
        title: `Per Capita CO2 emmisions in ${year}`,
        showlegend: false,

        yaxis: {
          title: {
            text: "CO2 emmision Per Capita(in Quintal)",
            font: {
              family: "Courier New, monospace",
              size: 18,
              color: "#7f7f7f",
            },
          },
        },
      };

      const config = {
        staticPlot: true,
      };
      BargraphView.rendorGraph(currCountry, Plotly, [trace, layout, config]);
    } catch (error) {
      BargraphView.rendorError("Data not Available. Try  between 2010 to 2021");
    }
  });
}

function getData(year, category) {
  try {
    console.log(year, category);
    const countriesCO2 = model.state.annualCO2[category][year];
    const pc = model.state.annualCO2["Total"][year];

    const percapita = pc
      ? Object.keys(countriesCO2).map((x) => pc[x] || 0)
      : undefined;
    const countrynames = Object.keys(countriesCO2).map(
      (x) => model.state.code_to_name[x]
    );

    // console.log(model.state.geojson['CH']);

    const data = [
      {
        type: "choroplethmapbox",
        z: Object.values(countriesCO2),
        locations: Object.keys(countriesCO2),
        geojson: model.state.geojson,
        customdata: percapita,
        zmin: 0,
        // zmax: max,
        // zauto: false,
        colorbar: {
          title: "",
          thickness: 20,
        },
        marker: {
          line: {
            color: "transparent",
            opacity: 1,
            width: 0.1,
          },
        },
        text: countrynames,
        autocolorscale: false,

        colorscale: 'Greys',


        hovertemplate: `${ChoroplethView.generateHoverMarkup(
          "%{z}",
          "%{text}",
          percapita ? "%{customdata}" : undefined,
          year
        )}`,
      },
    ];
    return data;
  } catch (error) {
    throw error;
  }
}

function init() {
  ChoroplethView.addMapRendorer(initialPlot);
  timeScrollerView.addHandlerPloter(plotMap);
  NavBarView.addCategoryHandler(plotMap);
}

init();

// if (module.hot) {
//   module.hot.accept();
// }

/*
  TODO #1: scroller for year controller ✅
  TODO #2: Spinner while dataloading ✅
  TODO #3: Onclicked to any country - countries detailed graph ✅
  TODO #4: dropdown hover and click handling ✅
  TODO #5: datasource refrence & footer ✅
  TODO #6: Error Handling= {bar graph default = 2021 with error} ✅
  TODO #7: Color Correction🥲
  TODO #8: Optimize data loading
  TODO #9: Make Responsive
*/
