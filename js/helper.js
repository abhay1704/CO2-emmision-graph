import Pako from "pako";

const timer = function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Taking too much time to Fetch Data"));
    }, time * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const data = await Promise.race([fetch(url), timer(3)]);
    const dataJSON = await data.json();
    if (dataJSON.status != 200) throw new Error("Error Recieving Data");
    return dataJSON;
  } catch (error) {
    throw error;
  }
};

export async function fetchGeoJSON(url) {
  try {
    const fetchPromise = fetch(url, {
      headers: {
        Accept: "application/json",
      },
      responseType: "arraybuffer",
    });

    const response = await Promise.race([fetchPromise, timer(3)]);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();

    const decompressedData = Pako.inflate(buffer, { to: "string" }); // Assuming it's gzip

    return JSON.parse(decompressedData);
  } catch (error) {
    throw error;
  }
}

// export async function compressGeoJSON(geojsonData, outputFile) {
//   try {
//     const compressedData = Pako.deflate(JSON.stringify(geojsonData));

//     const blob = new Blob([compressedData], { type: "application/gzip" });
//     await new Promise((resolve, reject) => {
//       //     const fileSaver = window.saveAs || window.webkitSaveAs || window.mozSaveAs;

//       //     if (!fileSaver) {
//       //       reject(new Error("Browser doesn't support file saving"));
//       //     } else {
//       //       fileSaver(blob, outputFile);
//       //       resolve();
//       //     }

//       const url = URL.createObjectURL(blob);

//       document.getElementById("graph").insertAdjacentHTML(
//         "beforeend",
//         `
//             <a href=${url}> Downmload File </a>
//         `
//       );
//     });
//     console.log("GeoJSON compressed and saved as", outputFile);
//   } catch (error) {
//     console.error("Error compressing GeoJSON:", error);
//   }
// }
