const ImageWidget = ({ photoSrc = "/images/ananya-2.jpg", alt = "Ananya" }) => {
  return (
   <div className="z-40 w-full h-64 overflow-hidden rounded-4xl bg-white/20 
      shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-transform duration-300 
      group-hover:scale-105">
    <img src={photoSrc} alt={alt} className="h-full w-full object-cover object-center" />
  </div>
  );
};

export default ImageWidget