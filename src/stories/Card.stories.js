/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Card from "../components/Card";

const SampleItem =  {
    image: [
      {
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/d8888f990ce044e4c856550a7041c83e.png",
        size: "large",
      },
      {
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/d8888f990ce044e4c856550a7041c83e.png",
        size: "large",
      },
      {
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/d8888f990ce044e4c856550a7041c83e.png",
        size: "large",
      },
      {
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/d8888f990ce044e4c856550a7041c83e.png",
        size: "large",
      },
    ],
    name: "Fearless",
    playcount: 25268278,
    url: "https://www.last.fm/music/Taylor+Swift/Fearless",
  }

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const TaylorSwift = Template.bind({});
TaylorSwift.args = {
  item: SampleItem,
  name: "Taylor Swift",
};

