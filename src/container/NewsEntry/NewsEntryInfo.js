import React, { useState } from "react";
import { CContainer, CButton } from "@coreui/react";
import "./Form.css";
import { db } from "./../../firebase";
import { storage } from "./../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function AboutInfo() {
  const [newsHeader, setNewsHeader] = useState("");
  const [description, setDescription] = useState("");
  const [extra, setExtra] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    let docData = {
      newsTitle: newsHeader,
      newsImage: url,
      modalDescription: description,
      date: new Date().getTime(),
    };

    //This helps to create auto-generated id
    const colRef = collection(db, "News");
    addDoc(colRef, docData)
      .then(() => {
        setLoader(false);
        alert("News has been added Successfully");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setNewsHeader("");
    setDescription("");
   
    setImage(null);
  };

  const handleUpload = () => {
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl(url);
        });
      }
    );
  };

  let uploaded = progress === 100 && url !== "" ? <p>uploaded</p> : "";

  return (
    <>
      <CContainer fluid className="container-sm" style={{ marginTop: "60px" }}>
        <form className="form" onSubmit={handleSubmit}>
          <h1>
            Add <b>News</b> Here
          </h1>

          <label>News Title</label>
          <input
            placeholder="News Title"
            value={newsHeader}
            name="News Title"
            onChange={(e) => setNewsHeader(e.target.value)}
          />

         
          <label>
            Upload News Image (Wait to see "UPLOADED" before you submit)
          </label>

          <input
            style={{
              fontSize: "12px",
              paddingBottom: "40px",
            }}
            type="file"
            onChange={handleChange}
          />

          <CButton
            type="button"
            className="btn btn-secondary rounded-pill btn-sm"
            onClick={handleUpload}
          >
            Upload
          </CButton>
          {uploaded}

          <label style={{ marginTop: "15px" }}> News Description</label>
          <textarea
            placeholder="Details about the event"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

       

          <button
            className="appbutton"
            type="submit"
            style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
          >
            Submit
          </button>
        </form>
      </CContainer>
    </>
  );
}
