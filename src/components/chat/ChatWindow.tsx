import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import { Avatar } from '../ui/avatar';
import { Send, Bot } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai' | 'customer';
  timestamp: string;
}

interface ChatWindowProps {
  messages?: Message[];
  aiSuggestion?: string;
  onSendMessage?: (message: string) => void;
  onAcceptAiSuggestion?: () => void;
}

const defaultMessages: Message[] = [
  {
    id: '1',
    content: 'Hello! How can I help you today?',
    sender: 'ai',
    timestamp: '10:00 AM'
  },
  {
    id: '2',
    content: 'I have a question about your services',
    sender: 'customer',
    timestamp: '10:01 AM'
  },
  {
    id: '3',
    content: 'I'd be happy to help you with that. What would you like to know?',
    sender: 'user',
    timestamp: '10:02 AM'
  }
];

const ChatWindow = ({
  messages = defaultMessages,
  aiSuggestion = 'Would you like me to provide more details about our service packages?',
  onSendMessage = () => {},
  onAcceptAiSuggestion = () => {}
}: ChatWindowProps) => {
  const [newMessage, setNewMessage] = React.useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <Card className="flex flex-col h-full bg-white">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Active Conversation</h2>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'customer' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`flex items-start gap-2 max-w-[70%]`}>
                {message.sender === 'customer' && (
                  <Avatar className="w-8 h-8">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=customer" alt="Customer" />
                  </Avatar>
                )}
                <div
                  className={`p-3 rounded-lg ${
                    message.sender === 'customer'
                      ? 'bg-gray-100'
                      : message.sender === 'ai'
                      ? 'bg-blue-100'
                      : 'bg-primary text-white'
                  }`}
                >
                  <p>{message.content}</p>
                  <span className="text-xs text-gray-500 mt-1 block">{message.timestamp}</span>
                </div>
                {(message.sender === 'ai' || message.sender === 'user') && (
                  <Avatar className="w-8 h-8">
                    {message.sender === 'ai' ? (
                      <Bot className="w-4 h-4" />
                    ) : (
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=agent" alt="Agent" />
                    )}
                  </Avatar>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {aiSuggestion && (
        <div className="p-4 border-t bg-blue-50">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-blue-600" />
            <p className="flex-1 text-sm text-blue-600">{aiSuggestion}</p>
            <Button size="sm" variant="outline" onClick={onAcceptAiSuggestion}>
              Accept Suggestion
            </Button>
          </div>
        </div>
      )}

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button onClick={handleSendMessage}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatWindow;
