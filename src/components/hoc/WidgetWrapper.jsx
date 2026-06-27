const WidgetWrapper = ({ children, className = "" }) => {
  return (
    <div className={`z-40 flex h-100 w-80 items-center justify-center overflow-hidden rounded-[2rem] bg-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-lg ${className}`.trim()}>
      {children}
    </div>
  );
};

export default WidgetWrapper;