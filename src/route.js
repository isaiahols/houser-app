import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/dashboard';
import Wizard from './components/Wizard/wizard';
import Step1 from './components/Wizard/Steps/step1';
import Step2 from './components/Wizard/Steps/step2';
import Step3 from './components/Wizard/Steps/step3';

export default (
    <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/wizard/:id' component={Wizard} />
        {/* <Route path='/Wizard/step1' component={Step1} />
        <Route path='/Wizard/step2' component={Step2} />
        <Route path='/Wizard/step3' component={Step3} /> */}
    </Switch>
)