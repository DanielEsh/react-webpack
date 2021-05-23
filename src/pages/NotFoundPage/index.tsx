import React from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';

import Button from '../../components/Button';

const NotFoundPage = () => {
  return (
    <div>
      404 return
      <Button color="yellow" size="middle" onClick={() => navigate(LinkEnum.HOME)}>
        Return
      </Button>
    </div>
  );
};

export default NotFoundPage;
