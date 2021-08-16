import React from 'react';
import Card from './Card';

const CustomerCard = ({ title, logo }) => (
  <Card className="m-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
    <div className="flex items-center mt-4 w-32 h-32">
      <img src={logo} alt={title} />
    </div>
  </Card>
);

export default CustomerCard;
