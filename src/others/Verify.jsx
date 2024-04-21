import { useState } from 'react';

function VerifyEm() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  async function handleVerifyEmail(e) {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/accounts/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('An error occurred');
    }
  }

  return (
    <div>
      <form onSubmit={handleVerifyEmail}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Token:
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />
        </label>
        <button type="submit">Verify Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default VerifyEm;