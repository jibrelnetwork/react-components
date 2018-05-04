// @flow

const handleTargetValue: Function = (handler: Function): Function => {
  return (event: Object): void => handler(event.target.value)
}

export default handleTargetValue
