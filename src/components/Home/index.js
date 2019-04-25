import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h1>What can I cook?</h1>
    <p>Please add all the ingredients that you have near</p>

 
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
