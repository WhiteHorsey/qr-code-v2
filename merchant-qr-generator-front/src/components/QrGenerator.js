import React, { useEffect } from "react";
import QRCode from "react-qr-code";

function QrGenerator({ values }) {
  useEffect(() => {}, [values]);

  return (
    <div className="mt-10 flex items-center justify-center ">
      <QRCode size={140} value={JSON.stringify(values)} />
    </div>
  );
}

export default QrGenerator;
