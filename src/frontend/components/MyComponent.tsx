import React from 'react';

import FirmImage from 'src/frontend/assets/FIRMNET.png'


const MyComponent: React.FC = () => {
    return (
      <div>
        <img src={FirmImage} alt="FirmNet Logo" /> {/* Provide meaningful alt text for accessibility */}
      </div>
    );
  };
  
  export default MyComponent;