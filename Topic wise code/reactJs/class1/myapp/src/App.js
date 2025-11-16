import React from 'react';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}> 
      <header style={{ backgroundColor: 'black', color: 'white', padding: '1rem' }}>
        <h1>Header</h1>
      </header>

      <div style={{ display: 'flex', flexGrow: 1 }}> 
        <aside style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <h3>Sidebar</h3>
          <p>The Menu or quick access content!</p>
        </aside>

        <main style={{ flexGrow: 1, padding: '1rem' }}>
          <h3>Main Content</h3>
          <p>The core website content should be displayed here.</p>
        </main>
      </div>

      <footer style={{ backgroundColor: 'black', color: 'white', padding: '1rem' }}>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;