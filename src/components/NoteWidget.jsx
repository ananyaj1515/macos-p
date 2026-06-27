import WidgetWrapper from "./hoc/WidgetWrapper";

const NoteWidget = () => {
  return (
    <WidgetWrapper>
        <div className=" bg-amber-200 w-full h-full overflow-hidden p-5 border-4 border-amber-300">
            <div className="flex-row gap-y-5">
                <div>
                    <h1 className="font-roboto text-2xl">About Me</h1>
                </div>
                <div className="font-mono">
                   <p>Computer Science</p>
                   <p>NUS'28</p>
                </div>
                </div>
        </div>
    </WidgetWrapper>
  );
};

export default NoteWidget;
