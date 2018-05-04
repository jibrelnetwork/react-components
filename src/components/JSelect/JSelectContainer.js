// @flow

import { withState } from 'recompose'

import JSelect from './JSelect'

export default withState('isOpen', 'toggle', false)(JSelect)
