import { useState } from 'react';

export default function App() {
  const [input, setInput] = useState('');
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      {input}
    </div>
  );
}
