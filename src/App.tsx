import React from 'react'

function App() {
  return (
    <div style={{ 
      padding: '2rem', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        color: '#2196f3',
        marginBottom: '1rem'
      }}>
        CourageCaller 📞
      </h1>
      
      <p style={{ 
        fontSize: '1.2rem', 
        color: '#666',
        marginBottom: '2rem'
      }}>
        Prepare and practice phone calls with confidence
      </p>
      
      <div style={{
        background: '#f0f9ff',
        padding: '2rem',
        borderRadius: '10px',
        border: '2px solid #2196f3'
      }}>
        <h2 style={{ color: '#2196f3' }}>🎉 Success! Your app is running!</h2>
        
        <div style={{ marginTop: '1rem', textAlign: 'left' }}>
          <h3>Features ready to build:</h3>
          <ul>
            <li>✅ Script Builder wizard</li>
            <li>✅ Voice practice mode</li>
            <li>✅ Teleprompter display</li>
            <li>✅ PDF export</li>
            <li>✅ Crisis support</li>
            <li>✅ PWA installation</li>
          </ul>
        </div>
        
        <p style={{ 
          marginTop: '1.5rem',
          fontWeight: 'bold',
          color: '#0d47a1'
        }}>
          Ready to help you build confidence! 💪
        </p>
      </div>
    </div>
  )
}

export default App