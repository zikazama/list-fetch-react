import { useEffect, useState } from "react";
import { Card } from "./Card";

export const CardList = () => {
  const [photos, setPhotos] = useState([]);

  const fetchData = async () => {
    const dataJson = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await dataJson.json();
    console.log(data);
    setPhotos(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        margin: "50px",
        flexWrap: "wrap",
        justifyItems: "center",
        justifyContent: "center"
      }}
    >
      {photos &&
        photos.map((item, index) => (
          <Card imageUrl={item.url} title={item.title} key={index} />
        ))}
    </div>
  );
};
