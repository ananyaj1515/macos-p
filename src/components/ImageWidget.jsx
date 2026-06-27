const ImageWidget = ({ photoSrc = "/images/ananya-2.jpg", alt = "Ananya" }) => {
  return (
    <div className="z-40 flex-1 min-w-[100px] max-w-[350px] h-10/12 items-center justify-center overflow-hidden rounded-[2rem] bg-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-102">
      <img
        src={photoSrc}
        alt={alt}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default ImageWidget