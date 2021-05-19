import React from 'react';
import { navigate } from 'hookrouter';

import Button from '../../components/Button';

const NotFoundPage = () => {
  return (
    <div>
      404 return
      <Button color="yellow" size="middle" onClick={() => navigate('/')}>
        Return
      </Button>
    </div>
  );
};

export default NotFoundPage;
