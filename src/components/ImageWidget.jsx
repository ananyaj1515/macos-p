import WidgetWrapper from "./hoc/WidgetWrapper";

const ImageWidget = ({ photoSrc = "/images/ananya.jpg", alt = "Ananya" }) => {
  return (
    <WidgetWrapper>
      <img
        src={photoSrc}
        alt={alt}
        className="h-full w-full object-cover object-center"
      />
    </WidgetWrapper>
  );
};

export default ImageWidget