"use client";

import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";

function ImportExcelModal() {
  const [data, setData] = useState([]);

  // Example values for internPeriodId and universityId
  const internPeriodId = "7dadeb37-4386-48ed-a636-f0ea4d2cf526";
  const universityId = "1b9f77cf-fe68-403b-994d-f50fadfb04ec";

  const handleFileUpload = async (e: any) => {
    const file = e.target?.files?.[0];

    if (file) {
      // Reading and converting file to JSON for preview
      const reader = new FileReader();

      reader.onload = (event) => {
        const binaryStr = event?.target?.result;
        const workbook = XLSX.read(binaryStr, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        setData(jsonData);
      };
      reader.readAsBinaryString(file);

      // Sending file to API with query parameters
      const formData = new FormData();
      formData.append("file", file);

      try {
        await axios.post(
          `https://intern-system-web-fjd3dcb9abf9etec.canadacentral-01.azurewebsites.net/api/candidate/import-candidate-list?internPeriodId=${internPeriodId}&universityId=${universityId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
      } catch (error) {
        console.error("Upload error:", error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default ImportExcelModal;
