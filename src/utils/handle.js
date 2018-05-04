// @flow

const handle: Function = (handler: Function): Function => {
  return (...args) => (/* event */) => handler(...args)
}

export default handle
