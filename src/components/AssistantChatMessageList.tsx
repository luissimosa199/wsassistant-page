import React from "react";

const AssistantChatMessageList = () => {
  return (
    <div className="flex-1 overflow-y-auto space-y-4 pt-10 p-4">
      <div className="flex flex-col space-y-2">
        <p className="font-semibold">User:</p>
        <p className="text-gray-700">Hello, how are you?</p>
        <p className="font-semibold">AI:</p>
        <p className="text-gray-700">
          I&apos;m doing great, thanks for asking. How can I assist you today?
        </p>
        <p className="font-semibold">User:</p>
        <p className="text-gray-700">I need help with my project.</p>
        <p className="font-semibold">AI:</p>
        <p className="text-gray-700">
          Sure, I&apos;d be happy to help. Can you tell me more about your
          project?
        </p>
      </div>
    </div>
  );
};

export default AssistantChatMessageList;
