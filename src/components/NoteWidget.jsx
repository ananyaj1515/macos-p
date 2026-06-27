import WidgetWrapper from "./hoc/WidgetWrapper";

const NoteWidget = () => {
  return (
    <WidgetWrapper className="p-6">
      <div className="h-full w-full bg-amber-200">
        <h1>Computer Science Student @ NUS</h1>
      </div>
    </WidgetWrapper>
  );
};

export default NoteWidget;
