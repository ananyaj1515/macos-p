import WidgetWrapper from "./hoc/WidgetWrapper";

const NoteWidget = () => {
  return (
    <WidgetWrapper>
        <div className=" bg-amber-200 w-full h-full overflow-hidden p-5 border border-5 border-amber-300">
            <h1 className="font-mono">
                Computer Science Student @ NUS
            </h1>
        </div>
    </WidgetWrapper>
  );
};

export default NoteWidget;
