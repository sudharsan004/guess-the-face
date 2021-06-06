import React, { useEffect, useState } from "react";
import question from '../question_data';
import images from '../image_data';

function Img() {
  // console.log(images)
  // console.log(question)
  // first initiate current count
  const [AnsrandomNo,setAns] = useState(Math.floor(Math.random() * 3)+1)
  // console.log(AnsrandomNo)
  const [CurrentCount, setCurrentCount] = useState('')
  const [remainder, setRemainder] = useState('secondsUntilEndOfDate % 30')
  
  useEffect(()=>{
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var secondsUntilEndOfDate = 24 * 60 * 60 - h * 60 * 60 - m * 60 - s;
  var count = Math.floor(secondsUntilEndOfDate / (30*3))
  // console.log(count)
  setCurrentCount(count)
  },[])
  useEffect(() => {
    // setRemainder(secondsUntilEndOfDate % 30)
    document.getElementsByTagName('h5')[0].innerText = question[CurrentCount]
  }, [CurrentCount])

  function timer() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var secondsUntilEndOfDate = 24 * 60 * 60 - h * 60 * 60 - m * 60 - s;
    var count = (Math.floor(secondsUntilEndOfDate / (30*3)));
    // console.log(count)
    var rem = secondsUntilEndOfDate % 30;
    setRemainder(rem)
    // console.log(Math.trunc(count), remainder);
    if (remainder == 0) {
      // console.log(count)
      setCurrentCount(count)
    }
  }
  setInterval(timer, 1000);

  
  // console.log(AnsrandomNo)
  function info(e) {
    var choose = e.target.id;
    if (AnsrandomNo == choose) {
      e.target.style.border = "solid 3px green";
    } else {
      var correct = document.getElementById(AnsrandomNo);
      correct.style.border = "solid 3px green";
      console.log(correct);
      e.target.style.border = "solid 3px red";
    }
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <img
            className="card"
            id="1"
            onClick={info}
            src={`https://thumb.fakeface.rest/thumb_${images[CurrentCount]}`}
            alt="h"
            width="200"
          />
        </div>
        <div className="col">
          <img
            className="card"
            id="2"
            onClick={info}
            src={`https://thumb.fakeface.rest/thumb_${images[CurrentCount+1]}`}
            alt="h"
            width="200"
          />
        </div>
        <div className="col">
          <img
            className="card"
            id="3"
            onClick={info}
            src={`https://thumb.fakeface.rest/thumb_${images[CurrentCount+2]}`}
            alt="h"
            width="200"
          />
        </div>
        <div className="col">
          <img
            className="card"
            id="4"
            onClick={info}
            src={`https://thumb.fakeface.rest/thumb_${images[CurrentCount+3]}`}
            alt="h"
            width="200"
          />
        </div>
      </div>
      <br />
      <br />
      <center>
        <h5>
          
          ?
        </h5>
      </center>
      <p>{remainder}</p>
    </>
  );
}
export default Img;
