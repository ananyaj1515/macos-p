import { GraduationCap, Laptop, BookOpenCheck} from 'lucide-react';

const NoteWidget = () => {
  return (

      <div className="z-40 flex-1 w-full h-full items-center justify-center overflow-hidden rounded-4xl bg-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-3xl transition-transform duration-300 group-hover:scale-102 text-white flex flex-wrap">
        <div className="w-full h-full overflow-hidden p-3 sm:p-5">
          <div className="flex flex-col justify-between gap-2 sm:gap-3"> 
            <div>
              <p className="font-georama text-2xl sm:text-lg">About Me</p>
              
            </div>
            
            <div className='flex flex-row align-middle'>
              <GraduationCap size={35}/>
              <div className="font-georama pl-3 sm:pl-5 flex flex-col text-[1rem] sm:text-sm">
                <p className="leading-tight">Computer Science & Entrepreneurship @ NUS'28 </p>
              </div>
            </div>

                <div className='flex flex-row align-middle'>
                  <Laptop size={50}/>
                  <div className="font-georama pl-3 sm:pl-5 flex flex-col text-[1rem] sm:text-sm">
                    <p className="leading-tight">Specialising in Full Stack Development, AI & Parallel Computing </p>
                  </div>
                </div>

                <div className='flex flex-row align-middle'>
                  <BookOpenCheck size={30}/>
                  <div className="font-georama pl-3 sm:pl-5 flex flex-col text-[1rem] sm:text-sm">
                    <p className="leading-tight">Currently learning: .NET, C# & LangChain </p>
                  </div>
                </div>
          </div>
        </div>
      </div>
    
  );
};

export default NoteWidget;
