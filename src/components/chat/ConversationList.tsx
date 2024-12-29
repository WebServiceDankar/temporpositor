import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { MessageCircle, Phone } from "lucide-react";

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  channel: "whatsapp" | "website";
}

interface ConversationListProps {
  conversations?: Conversation[];
  onSelectConversation?: (id: string) => void;
  selectedId?: string;
}

const defaultConversations: Conversation[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    lastMessage: "I need help with my order",
    timestamp: "5m ago",
    unread: 2,
    channel: "whatsapp",
  },
  {
    id: "2",
    name: "Jane Smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    lastMessage: "Thanks for your assistance",
    timestamp: "10m ago",
    unread: 0,
    channel: "website",
  },
  {
    id: "3",
    name: "Mike Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    lastMessage: "When will my package arrive?",
    timestamp: "1h ago",
    unread: 1,
    channel: "whatsapp",
  },
];

const ConversationList = ({
  conversations = defaultConversations,
  onSelectConversation = () => {},
  selectedId = "1",
}: ConversationListProps) => {
  return (
    <Card className="w-80 h-full bg-white border-r">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Conversations</h2>
      </div>

      <ScrollArea className="h-[calc(100vh-5rem)]">
        <div className="p-2 space-y-2">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-3 rounded-lg cursor-pointer transition-colors ${
                selectedId === conversation.id
                  ? "bg-gray-100"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => onSelectConversation(conversation.id)}
            >
              <div className="flex items-start space-x-3">
                <Avatar className="w-10 h-10">
                  <img
                    src={conversation.avatar}
                    alt={conversation.name}
                    className="w-full h-full object-cover"
                  />
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">{conversation.name}</p>
                    <span className="text-xs text-gray-500">
                      {conversation.timestamp}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-600 truncate">
                      {conversation.lastMessage}
                    </p>
                    {conversation.unread > 0 && (
                      <Badge variant="destructive" className="rounded-full">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>

                  <div className="mt-1">
                    <Badge
                      variant="outline"
                      className={`${
                        conversation.channel === "whatsapp"
                          ? "text-green-600 border-green-600"
                          : "text-blue-600 border-blue-600"
                      }`}
                    >
                      {conversation.channel === "whatsapp" ? (
                        <Phone className="w-3 h-3 mr-1" />
                      ) : (
                        <MessageCircle className="w-3 h-3 mr-1" />
                      )}
                      {conversation.channel}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default ConversationList;
