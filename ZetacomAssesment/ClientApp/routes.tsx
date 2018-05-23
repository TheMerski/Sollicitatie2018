import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Klanten } from './components/Klanten';
import { Products } from './components/Product';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/Klanten' component={ Klanten } />
    <Route path='/Product' component={ Products } />
</Layout>;
