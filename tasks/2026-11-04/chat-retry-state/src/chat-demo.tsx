import { useState } from 'react';

type Message = { id: number; role: 'user' | 'assistant'; text: string; failed?: boolean };
let nextId = 3;

function mockStream(): Promise<string> {
  return new Promise((resolve, reject) => window.setTimeout(() => reject(new Error('Connection interrupted after partial response.')), 650));
}

export function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'user', text: 'Summarize the project status.' },
    { id: 2, role: 'assistant', text: 'The team has completed the first milestone.' },
  ]);
  const [busy, setBusy] = useState(false);

  async function send(text: string) {
    setMessages((items) => [...items, { id: nextId++, role: 'user', text }]);
    await requestReply();
  }

  async function requestReply() {
    // Intentional bug: retry appends a new failed assistant message instead of reusing its turn.
    const id = nextId++;
    setMessages((items) => [...items, { id, role: 'assistant', text: 'Preparing response...' }]);
    setBusy(true);
    try {
      const answer = await mockStream();
      setMessages((items) => items.map((item) => item.id === id ? { ...item, text: answer } : item));
    } catch {
      setMessages((items) => items.map((item) => item.id === id ? { ...item, text: 'Response interrupted.', failed: true } : item));
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="chat">
      <header><p className="eyebrow">NORTHSTAR ASSISTANT</p><h1>Workspace chat</h1></header>
      <section className="messages" aria-label="Conversation">
        {messages.map((message) => <article className={message.role} key={message.id}>
          <b>{message.role === 'user' ? 'You' : 'Assistant'}</b><p>{message.text}</p>
          {message.failed && <button disabled={busy} onClick={requestReply}>Retry response</button>}
        </article>)}
      </section>
      <form onSubmit={(event) => { event.preventDefault(); const input = new FormData(event.currentTarget).get('message')?.toString().trim(); if (input && !busy) { void send(input); event.currentTarget.reset(); } }}>
        <input name="message" aria-label="Message" placeholder="Ask a follow-up..." />
        <button disabled={busy}>Send</button>
      </form>
      <p className="hint">Demo stream deliberately disconnects to exercise retry behavior.</p>
    </main>
  );
}
