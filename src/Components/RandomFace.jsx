import React, { useEffect, useState } from "react";
import question from '../q';

function Img() {
  function timer() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var secondsUntilEndOfDate = 24 * 60 * 60 - h * 60 * 60 - m * 60 - s;
    var remainder = secondsUntilEndOfDate % 30;
    console.log(remainder);
  }
  setInterval(timer, 1000);

  var AnsrandomNo = Math.floor(Math.random() * 3) + 1;
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
            src="https://fakeface.rest/face/view/1"
            alt="h"
            width="200"
          />
        </div>
        <div className="col">
          <img
            className="card"
            id="2"
            onClick={info}
            src="https://fakeface.rest/face/view/3"
            alt="h"
            width="200"
          />
        </div>
        <div className="col">
          <img
            className="card"
            id="3"
            onClick={info}
            src="https://fakeface.rest/face/view/2"
            alt="h"
            width="200"
          />
        </div>
        <div className="col">
          <img
            className="card"
            id="4"
            onClick={info}
            src="https://fakeface.rest/face/view/4"
            alt="h"
            width="200"
          />
        </div>
      </div>
      <br />
      <br />
      <center>
        <h5>
          {
           question[
              Math.floor(Math.random() * (question.length))
            ]
          }
          ?
        </h5>
      </center>
    </>
  );
}
export default Img;
