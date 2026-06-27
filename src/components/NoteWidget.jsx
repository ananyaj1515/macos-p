import { GraduationCap, Laptop, BookOpenCheck} from 'lucide-react';

const NoteWidget = () => {
  return (

      <div className="z-40 flex h-90 w-90 items-center justify-center overflow-hidden rounded-[2rem] bg-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-3xl ${className text-white">
        <div className="  w-full h-full overflow-hidden p-5 ">
          <div className="flex flex-col justify-between gap-5">
              
                   
            <div>
              <h1 className="font-roboto text-2xl">About Me</h1>
              <h1>---------</h1>
            </div>
            
            <div className='flex flex-row align-middle'>
              <GraduationCap size={35}/>
              <div className="font-mono pl-5 flex flex-col">
                <p>Computer Science & Entrepreneurship @ NUS </p>
                <p>Class of 2028</p>
              </div>
            </div>

                <div className='flex flex-row align-middle'>
                  <Laptop size={50}/>
                  <div className="font-mono pl-5 flex flex-col">
                    <p>Specialising in Full Stack Development, AI & Parallel Computing </p>
                  </div>
                </div>

                <div className='flex flex-row align-middle'>
                  <BookOpenCheck size={30}/>
                  <div className="font-mono pl-5 flex flex-col">
                    <p>Currently learning: .NET, C# & Langchain </p>
                  </div>
                </div>
                
          </div>
        </div>
      </div>
    
  );
};

export default NoteWidget;
