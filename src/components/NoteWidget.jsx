import { GraduationCap, Laptop, BookOpenCheck} from 'lucide-react';

const NoteWidget = () => {
  return (

      <div className="z-40 flex-1 w-full h-full items-center justify-center overflow-hidden rounded-[2rem] bg-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-3xl transition-transform duration-300 group-hover:scale-102 text-white flex flex-wrap">
        <div className="w-full h-full overflow-hidden p-3 sm:p-5">
          <div className="flex flex-col justify-between gap-3 sm:gap-5"> 
            <div>
              <h1 className="font-roboto text-sm sm:text-lg">About Me</h1>
              <h1>---------</h1>
            </div>
            
            <div className='flex flex-row align-middle'>
              <GraduationCap size={35}/>
              <div className="font-mono pl-3 sm:pl-5 flex flex-col text-[0.72rem] sm:text-sm">
                <p className="leading-tight">Computer Science & Entrepreneurship @ NUS </p>
                <p className="leading-tight">Class of 2028</p>
              </div>
            </div>

                <div className='flex flex-row align-middle'>
                  <Laptop size={50}/>
                  <div className="font-mono pl-3 sm:pl-5 flex flex-col text-[0.72rem] sm:text-sm">
                    <p className="leading-tight">Specialising in Full Stack Development, AI & Parallel Computing </p>
                  </div>
                </div>

                <div className='flex flex-row align-middle'>
                  <BookOpenCheck size={30}/>
                  <div className="font-mono pl-3 sm:pl-5 flex flex-col text-[0.72rem] sm:text-sm">
                    <p className="leading-tight">Currently learning: .NET, C# & Langchain </p>
                  </div>
                </div>
                
          </div>
        </div>
      </div>
    
  );
};

export default NoteWidget;
