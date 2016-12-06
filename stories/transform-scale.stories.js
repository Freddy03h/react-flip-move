import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ListTransform from './helpers/ListTransform';


storiesOf(`Transform Scale`, module)
  .add('default', () => (
    <ListTransform />
  ))
