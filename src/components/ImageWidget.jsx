const ImageWidget = ({ photoSrc = "/images/ananya-2.jpg", alt = "Ananya" }) => {
  return (
    <div className="z-40 flex h-50 w-90 items-center justify-center overflow-hidden rounded-[2rem] bg-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-lg">
      <img
        src={photoSrc}
        alt={alt}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default ImageWidget