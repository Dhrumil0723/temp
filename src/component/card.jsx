import React from "react";
import "./card.css";

function Card() {
  var data = require("../data/10-songs.json");
  var data2 = require("../data/10-album.json");
  var data3 = require("../data/10-newrelease.json");

  return (
    <div class="card-container">
      <div class="card" id="card">
        <div id="back">
          <img src="https://res.cloudinary.com/trugamr/image/upload/v1534187015/Minimal%20Blur%20Cards/art_1.png" />
        </div>
        <img
          src="https://res.cloudinary.com/trugamr/image/upload/v1534187015/Minimal%20Blur%20Cards/art_1.png"
          id="art"
        />
        <div id="title">{data.feed.entry.title}</div>
        <div id="artist">{data.feed.entry.artist}</div>
      </div>
      <div class="card">
        <div id="back">
          <img src="https://res.cloudinary.com/trugamr/image/upload/v1534186997/Minimal%20Blur%20Cards/art_2.png" />
        </div>
        <img
          src="https://res.cloudinary.com/trugamr/image/upload/v1534186997/Minimal%20Blur%20Cards/art_2.png"
          id="art"
        />
        <div id="title">{data2.feed.entry.title}</div>
        <div id="title">{data2.feed.entry.title}</div>
      </div>
      <div class="card">
        <div id="back">
          <img src="https://res.cloudinary.com/trugamr/image/upload/v1534186999/Minimal%20Blur%20Cards/art_3.png" />
        </div>
        <img
          src="https://res.cloudinary.com/trugamr/image/upload/v1534186999/Minimal%20Blur%20Cards/art_3.png"
          id="art"
        />
        <div id="title">{data3.feed.entry.title}</div>
        <div id="title">{data3.feed.entry.title}</div>
      </div>
    </div>
  );
}

export default Card;
