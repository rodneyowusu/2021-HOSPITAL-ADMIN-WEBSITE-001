import React, { useState } from "react";
import { CContainer, CButton } from "@coreui/react";
import "./Form.css";
import { db } from "./../../firebase";
import { storage } from "./../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function BoardEntryInfo() {
  const [staffName, setName] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [staffAbout, setAbout] = useState("");
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
      staffName: staffName,
      phoneNo: phoneNo,
      staffAboutTitle: "About " + staffName,
      staffAbout: staffAbout,
      staffImg: url,
      date: new Date().getTime(),
    };

    //This helps to create auto-generated id
    const colRef = collection(db, "Board");
    addDoc(colRef, docData)
      .then(() => {
        setLoader(false);
        alert("Board Member has been added Successfully");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");

    setphoneNo("");
    setAbout("");
    setImage(null);
  };

  // const handleUpload = () => {
  //   const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(progress);
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage
  //         .ref("images")
  //         .child(image.name)
  //         .getDownloadURL()
  //         .then((url) => {
  //           setUrl(url);
  //         });
  //     }
  //   );
  // };

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
            Add <b>BOARD</b> Personnel Here
          </h1>
          <label>Name</label>
          <input
            placeholder="Name"
            value={staffName}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="phone">
            Phone No (This Won't Be Displayed on Site)
          </label>
          <input
            placeholder="Phone Number"
            value={phoneNo}
            onChange={(e) => setphoneNo(e.target.value)}
          />
          <label>Upload Image (Wait to see "UPLOADED" before you submit)</label>
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

          <label style={{ marginTop: "15px" }}>About</label>
          <textarea
            placeholder="About the staff"
            value={staffAbout}
            name="About"
            onChange={(e) => setAbout(e.target.value)}
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
