const ImageWidget = ({ photoSrc = "/images/ananya.jpg", alt = "Ananya" }) => {
  return (
    <div className="z-40 flex items-center justify-center">
      <div className="h-100 w-80 overflow-hidden rounded-[2rem] bg-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-lg">
        <img
          src={photoSrc}
          alt={alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ImageWidget;
