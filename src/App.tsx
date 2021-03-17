import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <h1>React + TS + Webpack Starter Application</h1>
      <h3>Today, {new Date().toLocaleDateString()}</h3>
    </div>
  );
};

export default App;
