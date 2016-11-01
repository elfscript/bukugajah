import React from 'react';
import { Card } from 'semantic-ui-react';

const items = [
  {
    header: 'Piano Live Ibadah Natal GKI Cikeas',
    description: 'menjadi pemain piano ibadah natal',
    meta: 'Cikeas, Jawa Barat',
  },
];

const CardUISimple = () => (
  <Card.Group items={items} />
);

export default CardUISimple;
