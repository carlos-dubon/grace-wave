import { cn } from "@/lib/cn";
import { Card } from "./card";
import { LuSmile, LuUser, LuSend } from "react-icons/lu";
import { useCallback, useEffect, useRef, useState } from "react";

interface ChatMessage {
  id: string;
  username: string;
  message: string;
  timestamp: string;
  isHost: boolean;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "1",
    username: "Pastor David",
    message:
      "Good evening, family! Welcome to the Evening Devotion Hour. Tonight we're talking about finding peace in uncertain times. Share your prayer requests with us.",
    timestamp: "6:02 PM",
    isHost: true,
  },
  {
    id: "2",
    username: "GraceSeeker",
    message: "Could we hear 'Amazing Grace' by Chris Tomlin tonight?",
    timestamp: "6:03 PM",
    isHost: false,
  },
  {
    id: "3",
    username: "FaithWalker",
    message:
      "This station has been such a blessing to our family. We listen every evening during dinner.",
    timestamp: "6:05 PM",
    isHost: false,
  },
  {
    id: "4",
    username: "Pastor David",
    message:
      "Chris Tomlin coming right up, GraceSeeker! And thank you FaithWalker, that truly warms my heart. God is good!",
    timestamp: "6:06 PM",
    isHost: true,
  },
  {
    id: "5",
    username: "JoyfulHeart",
    message:
      "Please pray for my mother, she's going through a difficult time. Thank you all.",
    timestamp: "6:08 PM",
    isHost: false,
  },
  {
    id: "6",
    username: "HopeRising",
    message: "Praying for your mother JoyfulHeart. God is with her always.",
    timestamp: "6:10 PM",
    isHost: false,
  },
  {
    id: "7",
    username: "Pastor David",
    message:
      "JoyfulHeart, we are lifting your mother up in prayer right now. Remember Philippians 4:6-7 - do not be anxious about anything. God hears us.",
    timestamp: "6:11 PM",
    isHost: true,
  },
];

interface LiveChatProps {
  className?: string;
}

export const LiveChat = (props: LiveChatProps) => {
  const username = "Listener321";
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [newMessage, setNewMessage] = useState<string>("");

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = useCallback(() => {
    if (!newMessage.trim()) return;

    const message: ChatMessage = {
      id: Date.now().toString(),
      username,
      message: newMessage.trim(),
      timestamp: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      isHost: false,
    };

    setMessages((prev) => [...prev, message]);
    setNewMessage("");
  }, [newMessage, username]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    },
    [sendMessage],
  );

  return (
    <Card id="chat" className={cn("p-0 max-w-4xl", props.className)}>
      <div className="flex items-center gap-3 border-b border-border p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
          <LuSmile className="h-5 w-5 text-accent" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-space-grotesk text-sm font-bold text-foreground">
            Live Chat
          </h3>
          <p className="text-xs text-muted-foreground">
            {messages.length} messages
          </p>
        </div>
      </div>
      <div
        className="h-[420px] overflow-auto scroll-smooth p-5"
        ref={scrollRef}
      >
        <div className="flex flex-col gap-4">
          {messages.map((msg) => (
            <div key={msg.id} className="flex gap-3">
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                  msg.isHost
                    ? "bg-accent text-background"
                    : "bg-border text-foreground/80",
                )}
              >
                <LuUser className="h-4 w-4" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      msg.isHost ? "text-accent" : "text-foreground",
                    )}
                  >
                    {msg.username}
                    {msg.isHost && (
                      <span className="ml-1.5 inline-flex items-center rounded bg-accent/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                        Host
                      </span>
                    )}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {msg.timestamp}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {msg.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-border text-foreground/80">
            <LuUser className="h-4 w-4" />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-xl border border-border bg-background pl-4 pr-2.5 py-2.5">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              aria-label="Chat message"
            />
            <button
              onClick={sendMessage}
              disabled={!newMessage.trim()}
              className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-background transition-all hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <LuSend className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="mt-2 pl-11 text-xs text-muted-foreground">
          Chatting as{" "}
          <span className="font-medium text-foreground/80">{username}</span>
        </p>
      </div>
    </Card>
  );
};
