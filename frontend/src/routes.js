import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Logon, Register, Profile, NewIncident } from '~/pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Logon} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
      <Route path="/incidents/new" component={NewIncident} />
    </Switch>
  );
}
