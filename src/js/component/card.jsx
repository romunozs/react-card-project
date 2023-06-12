import React from "react";
export const Cards = () => {
  const cardContent = [
    {
      title: "Recorded Future",
      text: "RF Support text",
      image: "https://picsum.photos/500/325",
      link: "https://therecord.media/",
      button: "Take Me",
    },
    {
      title: "Wired Security",
      text: "WS Support text",
      image: "https://picsum.photos/500/325",
      link: "https://www.wired.com/category/security/",
      button: "Take Me",
    },
    {
      title: "The Hacker News",
      text: "THN Support text",
      image: "https://picsum.photos/500/325",
      link: "https://thehackernews.com/",
      button: "Take Me",
    },
    {
      title: "Threat Post",
      text: "TP Support text",
      image: "https://picsum.photos/500/325",
      link: "https://threatpost.com/",
      button: "Take Me",
    },
  ];

  const cardStructure = (singleCard, i) => {
    return (
      <div className="card" key={i}>
        <img src={singleCard.image} className="card-img-top" alt=":("></img>
        <div className="card-body">
          <h5 className="card-title">{singleCard.title}</h5>
          <p className="card-text">{singleCard.text}</p>
          <div className="card-footer text-body-secondary">
            <a href={singleCard.link} className="btn btn-primary">
              {singleCard.button}
            </a>
          </div>
        </div>
      </div>
    );
  };
  return cardContent.map(cardStructure);
};
