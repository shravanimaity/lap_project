import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./context/AuthContext";

export default function UploadAchievement() {
  const { token } = useAuth();
  const { memberId } = useParams();
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file");
      return;
    }
    const form = new FormData();
    form.append("file", file);

    try {
      const resp = await axios.post(
        `http://localhost:5000/api/member/${memberId}/achievement`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage("Upload successful");
    } catch (err) {
      console.error(err);
      setMessage("Upload failed: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Upload Achievement for Member {memberId}</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-2"
      />
      <button
        onClick={handleUpload}
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        Upload
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
