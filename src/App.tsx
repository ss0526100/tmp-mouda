import { useEffect, useState } from 'react';

export default function App() {
  const [input, setInput] = useState('');
  useEffect(() => {
    useState();
  }, []);
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      {input}
    </div>
  );
}
