import React from 'react';
import Message from './Message';

const App = () => {
  return (
    <div>
      <Message 
        header="Changes in Service"
        text="We just updated our privacy policy here to better service our customers."
      />
    </div>
  );
};

export default App;