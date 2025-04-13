
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: 'user' | 'agent';
  content: string;
  timestamp: Date;
}

const AiAgent = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'agent',
      content: "Hi there! I'm your Nobi AI creative assistant. I'm here to help you generate content ideas and monetization strategies with Zora Coins. Tell me about yourself, your creative interests, and your audience!",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, {
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    }]);
    
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      let response = '';
      
      if (inputValue.toLowerCase().includes('photographer') || inputValue.toLowerCase().includes('photo')) {
        response = "I see you're a photographer! That's fantastic. With your visual skills, you could create an exclusive coin-gated collection of your best work. You might consider creating themed photosets that your audience can collect. What kind of photography do you specialize in?";
      } else if (inputValue.toLowerCase().includes('writer') || inputValue.toLowerCase().includes('blog')) {
        response = "As a writer, you have many opportunities with Zora Coins! You could create token-gated newsletters, exclusive story collections, or even serialize your content with each chapter tied to a coin. What kind of writing do you enjoy most?";
      } else if (inputValue.toLowerCase().includes('music') || inputValue.toLowerCase().includes('musician')) {
        response = "Musicians can really thrive with Zora Coins! You could release exclusive tracks, stems for remixing, or special listening experiences. You might even consider bundling visual art with your music for a complete package. What genre do you create in?";
      } else {
        response = "Thanks for sharing! Based on what you've told me, I think you could explore creating limited edition digital collectibles that showcase your unique style. Zora Coins would allow your fans to own a piece of your creative journey. Would you like me to suggest some specific content ideas based on your interests?";
      }
      
      // Add AI response
      setMessages(prev => [...prev, {
        role: 'agent',
        content: response,
        timestamp: new Date()
      }]);
      
      setIsLoading(false);
    }, 1500);
    
    setInputValue('');
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[600px] nobi-card">
      <div className="p-4 border-b border-border flex items-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-nobi-gradient flex items-center justify-center">
          <MessageSquare className="h-4 w-4 text-white" />
        </div>
        <h3 className="font-semibold">Nobi AI Creator Assistant</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, i) => (
          <div 
            key={i}
            className={cn(
              "flex max-w-[80%] rounded-2xl px-4 py-3",
              message.role === 'user' 
                ? "bg-primary/20 ml-auto" 
                : "bg-muted mr-auto"
            )}
          >
            <p className="text-sm">{message.content}</p>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center space-x-2 bg-muted max-w-[80%] rounded-2xl px-4 py-3">
            <RefreshCw className="h-4 w-4 animate-spin" />
            <p className="text-sm">Nobi is thinking...</p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-border">
        <div className="flex space-x-2">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Tell me about your creative interests..."
            className="min-h-[60px] flex-1"
            disabled={isLoading}
          />
          <Button
            onClick={handleSendMessage}
            disabled={inputValue.trim() === '' || isLoading}
            className="nobi-button-primary"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AiAgent;
