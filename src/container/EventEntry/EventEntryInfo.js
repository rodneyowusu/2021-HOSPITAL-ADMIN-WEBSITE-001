import React, { useState } from "react";
import { CContainer, CButton } from "@coreui/react";
import "./Form.css";
import { db } from "./../../firebase";
import { storage } from "./../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function AboutInfo() {
  const [eventHeader, setEventHeader] = useState("");
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
      header: eventHeader,
      date: date,
      description: description,
      time: time,
      venue: venue,
      image: url,
      extra: extra,
      dateId: new Date().getTime(),
    };

    //This helps to create auto-generated id
    const colRef = collection(db, "UpcomingEvents");
    addDoc(colRef, docData)
      .then(() => {
        setLoader(false);
        alert("Event has been added Successfully");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setExtra("");
    setEventHeader("");
    setDescription("");
    setTime("");
    setDate("");
    setImage(null);
    setVenue("");
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
            Add <b>UPCOMING EVENTS</b> Here
          </h1>

          <label>Event Header</label>
          <input
            placeholder="Event Header"
            value={eventHeader}
            name="Event Header"
            onChange={(e) => setEventHeader(e.target.value)}
          />

          <label>Event Date (dd/mm/yyyy)</label>
          <input
            placeholder="Event Date"
            value={date}
            name="Event Date"
            onChange={(e) => setDate(e.target.value)}
          />

          <label>Event Time (hh:mm) </label>
          <input
            placeholder="Event Time"
            value={time}
            name="Event Time"
            onChange={(e) => setTime(e.target.value)}
          />

          <label>Venue</label>
          <input
            placeholder="Venue"
            value={venue}
            name="Venue"
            onChange={(e) => setVenue(e.target.value)}
          />

          <label>
            Upload Event Image (Wait to see "UPLOADED" before you submit)
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

          <label style={{ marginTop: "15px" }}>Description</label>
          <textarea
            placeholder="Details about the event"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label>Add Special Note</label>
          <input
            placeholder="Special Note"
            value={extra}
            name="Special Note"
            onChange={(e) => setExtra(e.target.value)}
          />

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
