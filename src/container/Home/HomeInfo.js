import React, { useState, useEffect, useRef } from "react";
import { CCallout, CContainer } from "@coreui/react";
import { db } from "./../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Spinner from "./../../component/Spinner/Spinner";
import "./Home.css";
import { useUserAuth } from "../../component/Context/UserAuthContext";
import AbortController from "abort-controller";

const HomeInfo = () => {
  const [bookInfo, setbookInfo] = useState("");
  const [loading, setloading] = useState(false);
  const { user } = useUserAuth();
  const componentMounted = useRef(true);

  // useEffect(() => {
  //   setloading(true);
  //   db.collection("contacts").onSnapshot((snapshot) => {
  //     const newBookinfo = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setbookInfo(newBookinfo);
  //     setloading(false);
  //   });
  // }, []);

  useEffect(() => {
    setloading(true);
    let cancel = false; // This helps to unmount useEffect when a home is called mistakingly
    const colRef = collection(db, "contacts");
    getDocs(colRef)
      .then((snapshot) => {
        if (cancel) return; // The condition here helps to do so
        let newBookinfo = [];
        snapshot.docs.forEach((doc) => {
          newBookinfo.push({ id: doc.id, ...doc.data() });
        });

        setbookInfo(newBookinfo);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      cancel = true;
    };
  }, []);

  // const theinfo = useBookInfo();
  // console.log(theinfo);

  //Converted to array
  const infoarray = Object.entries(bookInfo);
  // console.log(infoarray);

  //Getting All date values
  const getDatesValues = infoarray.map((info) => info[1].date);
  // console.log(getDatesValues);

  //Sorting all date values
  const sortedDates = getDatesValues.sort(function (a, b) {
    return b - a;
  });
  // console.log(sortedDates);

  //comparing dates in the sorted printing.
  let generalInfo = sortedDates.map((dates) => {
    return infoarray.map((info) =>
      dates == info[1].date ? (
        <CCallout
          style={{ marginTop: "10px" }}
          color="primary"
          key={info[1].id}
        >
          <p>Name : {info[1].name}</p>
          <p>Phone Number : {info[1].phoneNo}</p>
          <p>Email : {info[1].email}</p>
          <p>Message : {info[1].message}</p>
        </CCallout>
      ) : (
        ""
      )
    );
  });

  // let generalInfo = infoarray.map((info) => (
  //   <CCallout color="primary" key={info[1].id}>
  //     <p>Name : {info[1].name}</p>
  //     <p>Phone Number : {info[1].phoneNo}</p>
  //     <p>Email : {info[1].email}</p>
  //     <p>Message : {info[1].message}</p>
  //   </CCallout>
  // ));

  if (loading) {
    generalInfo = <Spinner />;
  }

  return (
    <div className="thebody">
      <CContainer fluid style={{ minHeight: "500px", marginTop: "2px" }}>
        {generalInfo}
      </CContainer>
    </div>
  );
};

export default HomeInfo;
