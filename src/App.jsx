import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) setSubmitted(true)
  }

  const handleReset = () => {
    setName('')
    setSubmitted(false)
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hello World!</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>What's your name?</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Greet me!</button>
        </form>
      ) : (
        <div style={styles.greeting}>
          <p style={styles.greetingText}>Hello, {name}! 🌸</p>
          <button onClick={handleReset} style={styles.button}>Start over</button>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff0f5',
    fontFamily: 'sans-serif',
  },
  title: {
    fontSize: '3rem',
    color: '#e91e8c',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  label: {
    fontSize: '1.2rem',
    color: '#c2185b',
  },
  input: {
    padding: '0.6rem 1rem',
    fontSize: '1rem',
    border: '2px solid #f48fb1',
    borderRadius: '8px',
    outline: 'none',
    color: '#880e4f',
    width: '250px',
  },
  button: {
    padding: '0.6rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#e91e8c',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  greeting: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  greetingText: {
    fontSize: '2rem',
    color: '#c2185b',
    fontWeight: 'bold',
  },
}

export default App
