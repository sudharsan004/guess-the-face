import React, { useEffect, useState } from "react";
import question from '../question_data';
import images from '../image_data';
import firebase from "../utils/firebase"
function Img() {

    const [data,setData] = useState({})
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var secondsUntilEndOfDate = 24 * 60 * 60 - h * 60 * 60 - m * 60 - s;
    var count = Math.trunc(secondsUntilEndOfDate / 30)
    console.log(count)

    function get(id) {
        const ref = firebase.database().ref('data').child(500);
        ref.once('value', (snapshot) => {
            setData(snapshot.val())
            console.log('test', snapshot.val());
            console.log(data.images[0])
        });
    }
    get(count)




    function update() {
        const child = firebase.database().ref("data").child(500);
        child.update({
            "images": ["male_11_30744d10b092343e3c7d37d62ba597ddfe810804.jpg", "male_43_94f24bd39bb64518195962b7bf1e8b9bf23db45c.jpg", "female_41_4ed7a6aa379c5116fbcd5bd31ba0fe2f094e4e43.jpg", "female_11_d8ac3df5f671d8ac5ec0600bbde54e38e3ee43a8.jpg"]
            , "question": "Who is most likely to get married first?",
            "votes": [0, 0, 0, 0]
        })
    }
   
    function info(){
        console.log('')
    }
    
    return (
        <>

<div className="row">
        <div className="col">
          <img
            className="card"
            id="1"
            onClick={info}
            src={`https://thumb.fakeface.rest/thumb_${data.images[0]}`}
            alt="h"
            width="200"
          />
        </div>
        <div className="col">
          <img
            className="card"
            id="2"
            onClick={info}
            src={`https://thumb.fakeface.rest/thumb_${data.images[1]}`}
            alt="h"
            width="200"
          />
        </div>
        <div className="col">
          <img
            className="card"
            id="3"
            onClick={info}
            src={`https://thumb.fakeface.rest/thumb_${data.images[2]}`}
            alt="h"
            width="200"
          />
        </div>
        <div className="col">
          <img
            className="card"
            id="4"
            onClick={info}
            src={`https://thumb.fakeface.rest/thumb_${data.images[3]}`}
            alt="h"
            width="200"
          />
        </div>
      </div>
      <br />
      <br />
      <center>
        <h5>
          
          {data["question"]}
        </h5>
      </center>
      <p>{5}</p>

        </>
    );
}
export default Img;
