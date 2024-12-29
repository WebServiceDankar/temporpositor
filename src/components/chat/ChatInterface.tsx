import React from "react";
import ConversationList from "./ConversationList";

interface ChatInterfaceProps {
  selectedConversationId?: string;
  onSelectConversation?: (id: string) => void;
  onSendMessage?: (message: string) => void;
  onAcceptAiSuggestion?: () => void;
}

const ChatInterface = ({
  selectedConversationId = "1",
  onSelectConversation = () => {},
  onSendMessage = () => {},
  onAcceptAiSuggestion = () => {},
}: ChatInterfaceProps) => {
  return (
    <div className="flex h-full w-full bg-gray-50">
      <ConversationList
        selectedId={selectedConversationId}
        onSelectConversation={onSelectConversation}
      />
      <div className="flex-1 ml-4">
        {/* Temporarily removed ChatWindow component until import issue is resolved */}
        <div className="h-full bg-white rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Chat Window</h2>
          <p className="text-gray-500">Chat window component loading...</p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
