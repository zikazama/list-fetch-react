export const Card = ({ imageUrl, title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        height: "300px",
        backgroundColor: "gray",
        textAlign: "center",
        justifyContent: "center",
        justifyItems: "center",
        justifySelf: "center",
      }}
    >
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PCMfp_Xq7wX58BKOSZF18uUFuoiO6IcL_A&s"
        }
        style={{ width: "100px", margin: "auto" }}
        alt={title}
      />
      <h2>{title}</h2>
    </div>
  );
};
