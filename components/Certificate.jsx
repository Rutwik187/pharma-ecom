import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Certificate = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const pdfWorkerUrl = `https://unpkg.com/pdfjs-dist@${
    // Replace with your actual version
    require("pdfjs-dist/package.json").version
  }/build/pdf.worker.js`;
  return (
    <Worker workerUrl={pdfWorkerUrl}>
      <div className="h-[400px] md:h-[650px] ml-auto mr-auto">
        <Viewer
          fileUrl="/license.pdf"
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  );
};

export default Certificate;
