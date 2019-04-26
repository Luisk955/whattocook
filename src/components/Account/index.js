import React from 'react';

import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <p className="h2">Account: {authUser.email}</p>
        <div class="row">
          <div class="col-6">
            <PasswordForgetForm />
          </div>
          <div class="col-6">
            <PasswordChangeForm />
          </div>
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
