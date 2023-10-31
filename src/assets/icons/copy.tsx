import { ComponentProps, FC } from 'react'

interface CopyIconProps extends ComponentProps<'svg'> {
  color?: string
  size?: number
}

const CopyIcon: FC<CopyIconProps> = ({ size = 28, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      {...rest}
    >
      <g id="icons">
        <g id="Organization">
          <g id="File">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="m28,10v18H10V10h18m0-2H10c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V10c0-1.1-.9-2-2-2h0Z"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="m4,18h-2V4c0-1.1.9-2,2-2h14v2H4v14Z"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default CopyIcon
