// @flow

import React from 'react'
import classNames from 'classnames'

import handleTargetValue from '../../utils/handleTargetValue'

const JInput = ({
  onChange,
  type,
  name,
  value,
  color,
  label,
  placeholder,
  helpMessage,
  infoMessage,
  errorMessage,
  isLoading,
  isChecked,
  isDisabled,
}: Props) => {
  const labelOrPlaceholder = label || placeholder

  return (
    <div
      className={classNames(
        `j-input -${type} -${color}`,
        !!value && '-value',
        infoMessage && '-info',
        helpMessage && '-help',
        isLoading && '-loading',
        isChecked && '-checked',
        errorMessage && '-error',
        isDisabled && '-disabled',
      )}
    >
      <input
        onChange={handleTargetValue(onChange)}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className='input'
        disabled={isDisabled}
      />
      <div className='label'>{labelOrPlaceholder}</div>
      {infoMessage && <div className='info'>{infoMessage}</div>}
      {errorMessage && <div className='error'>{errorMessage}</div>}
      <div className='tick' />
      <div className='loader' />
      <div className='lock'><div className='icon' /></div>
      <div className='help'><div className='icon' /></div>
    </div>
  )
}

type Props = {
  onChange: Function,
  name: ?string,
  label: string,
  placeholder: string,
  helpMessage: ?string,
  infoMessage: ?string,
  errorMessage: ?string,
  value: string | number,
  color: 'gray' | 'white',
  type: 'text' | 'password',
  isLoading: boolean,
  isChecked: boolean,
  isDisabled: boolean,
}

JInput.defaultProps = {
  name: '',
  type: 'text',
  color: 'white',
  helpMessage: null,
  infoMessage: null,
  errorMessage: null,
  isLoading: false,
  isChecked: false,
  isDisabled: false,
}

export default JInput
