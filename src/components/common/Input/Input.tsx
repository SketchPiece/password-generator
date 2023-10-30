import classNames from 'classnames'
import React, { ComponentProps, forwardRef, useId } from 'react'
import styles from './styles.module.scss'

interface InputProps extends ComponentProps<'input'> {
  label?: string
  labelDirection?: 'row' | 'column'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, labelDirection = 'row', ...rest }, ref) => {
    const id = useId()

    const inputElement = (
      <input className={styles.input} id={id} ref={ref} {...rest} />
    )

    if (label) {
      return (
        <div
          className={classNames(styles.inputWrapper, {
            [styles.inputWrapperColumn]: labelDirection === 'column',
            [styles.inputWrapperRow]: labelDirection === 'row',
          })}
        >
          {inputElement}
          <label htmlFor={id} className={styles.inputLabel}>
            {label}
          </label>
        </div>
      )
    }

    return inputElement
  }
)

Input.displayName = 'Input'

export default Input
