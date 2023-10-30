import classNames from 'classnames'
import { ComponentProps, forwardRef, ReactNode } from 'react'
import styles from './styles.module.scss'

interface ButtonProps extends ComponentProps<'button'> {
  color?: 'primary' | 'red'
  children?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, color, ...props }, ref) => {
    return (
      <button
        className={classNames(styles.button, {
          [styles.buttonRed]: color === 'red',
        })}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
export default Button
