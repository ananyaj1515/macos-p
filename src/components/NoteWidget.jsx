import { GraduationCap, Laptop, BookOpenCheck} from 'lucide-react';
import WidgetWrapper from "./hoc/WidgetWrapper";

const NoteWidget = () => {
  return (
    <WidgetWrapper>
        <div className=" bg-[#f3ec9aa6] w-full h-full overflow-hidden p-5 border-4 border-[#b5952a4e]">
          <div className="flex flex-col justify-between gap-5">
              
                   
            <div>
              <h1 className="font-roboto text-2xl">About Me</h1>
              <h1>---------</h1>
            </div>
            
            <div className='flex flex-row align-middle'>
              <GraduationCap size={30}/>
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
    </WidgetWrapper>
  );
};

export default NoteWidget;
