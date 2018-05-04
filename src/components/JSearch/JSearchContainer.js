// @flow

import { compose } from 'ramda'
import { withHandlers, withStateHandlers } from 'recompose'

import JSearch from './JSearch'

type ComponentState = {
  query: string,
  timerId: number,
  isActive: boolean,
}

type ComponentProps = {
  onChange: Function,
  setQuery: Function,
  setTimerId: Function,
  toggle: Function,
  value: string,
  query: string,
  timerId: number,
}

// timeout before searching (in ms), to prevent screen blinking per each symbol
const SEARCH_TIMEOUT = 300

export default compose(
  withStateHandlers(
    ({ value }: { value: string }): ComponentState => ({
      query: value,
      timerId: 0,
      isActive: false,
    }),
    {
      setQuery: () => (query: string) => ({ query }),
      setTimerId: () => (timerId: number) => ({ timerId }),
      toggle: () => (isActive: boolean) => ({ isActive }),
    },
  ),
  withHandlers({
    onToggle: ({ onChange, setQuery, toggle }: ComponentProps) => (isActive: boolean) => {
      if (!isActive) {
        setQuery('')
        onChange('')
      }

      toggle(isActive)
    },
    onQueryChange: ({ onChange, setQuery, setTimerId, timerId }: ComponentProps) => (e: Object) => {
      if (timerId) {
        clearTimeout(timerId)
      }

      const query: string = e.target.value
      setQuery(query)

      // to prevent searching by each entered symbol
      const newTimerId = setTimeout(() => onChange(query), SEARCH_TIMEOUT)
      setTimerId(newTimerId)
    },
  }),
)(JSearch)
