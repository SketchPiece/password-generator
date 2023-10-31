import classNames from 'classnames'
import { ComponentProps, forwardRef, ReactNode } from 'react'
import styles from './styles.module.scss'

interface ButtonProps extends ComponentProps<'button'> {
  color?: 'primary' | 'secondary'
  children?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, color, className, ...props }, ref) => {
    return (
      <button
        className={classNames(
          styles.button,
          {
            [styles.buttonSecondary]: color === 'secondary',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
export default Button
