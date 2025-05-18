// UploadPage.jsx
import React, { useState } from "react";
import axios from "axios";

function UploadPage({ onResult }) {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("img", image);

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/gemini", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      onResult(response.data);  // 결과를 부모(App)에 전달
    } catch (error) {
      console.error("Error uploading image:", error);
      onResult({ error: error.message });
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Image Upload</h1>
      <input type="file" accept="image/*" onChange={handleChange} className="my-2" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Upload and Analyze
      </button>
    </div>
  );
}

export default UploadPage;
