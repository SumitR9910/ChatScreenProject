import TextBubble from "../ChatBubbles/TextBubble";

function TextBubbleGroup({ item, index, lastNode }) {
  const commonProps = {
    message: item?.message,
    time: item?.time,
    lastNode,
  };

  if (item?.received) {
    return (
      <TextBubble
        key={index}
        {...{
          ...commonProps,
          receivedSource: item?.receivedSource,
          received: true,
        }}
      />
    );
  }

  if (!item?.received) {
    return <TextBubble key={index} {...{ ...commonProps, received: false }} />;
  }
}

export default TextBubbleGroup;
