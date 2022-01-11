import React, { useState, useEffect } from "react";
import { CCallout, CContainer } from "@coreui/react";
import db from "./../../firebase";
import Spinner from "./../../component/Spinner/Spinner";

const HomeInfo = () => {
  const [bookInfo, setbookInfo] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    db.collection("contacts").onSnapshot((snapshot) => {
      const newBookinfo = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setbookInfo(newBookinfo);
      setloading(false);
    });
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
        <CCallout color="primary" key={info[1].id}>
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
    <CContainer fluid style={{ minHeight: "500px" }}>
      {generalInfo}
    </CContainer>
  );
};

export default HomeInfo;
