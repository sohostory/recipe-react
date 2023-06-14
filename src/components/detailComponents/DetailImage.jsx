import "./Details.css";

const DetailImage = ({ image, title }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`,
      }}
    >
      <div className="ad-text">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default DetailImage;