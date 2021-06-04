import React, { useEffect, useState } from "react";
// import CoinGecko from "coingecko-api";
// const CoinGeckoClient = new CoinGecko();

function Img() {
  // var RandomImgurl = "https://fakeface.rest/face/json";
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
            id="1"
            onClick={info}
            src="https://fakeface.rest/face/view/1"
            alt="h"
            width="200"
          />
        </div>
        <div className="col">
          <img
            id="2"
            onClick={info}
            src="https://fakeface.rest/face/view/3"
            alt="h"
            width="200"
          />
        </div>
        <div className="col">
          <img
            id="3"
            onClick={info}
            src="https://fakeface.rest/face/view/2"
            alt="h"
            width="200"
          />
        </div>
        <div className="col">
          <img
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
          Who would most likely{" "}
          {
            ["save others", "cheat", "solve issues", "kill"][
              Math.floor(Math.random() * 3)
            ]
          }
          ?
        </h5>
      </center>
    </>
  );
}
export default Img;