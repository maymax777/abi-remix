export interface IconProps {
  className?: string
  width?: string | number
  height?: string | number
  fill?: string
  stroke?: string
  id?: string
  rectFill?: string
}

export const CircleIcon: React.FC<IconProps> = ({ className = 'stroke-neutral-100', ...props }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.25 3.81567C18.1168 4.67133 19.6349 6.13967 20.5522 7.97696C21.4695 9.81426 21.7309 11.91 21.293 13.9163C20.8551 15.9227 19.7443 17.7189 18.1448 19.0069C16.5454 20.2949 14.5536 20.9972 12.5 20.9972C10.4464 20.9972 8.45464 20.2949 6.8552 19.0069C5.25577 17.7189 4.14491 15.9227 3.70701 13.9163C3.26911 11.91 3.53051 9.81426 4.44783 7.97696C5.36514 6.13967 6.8832 4.67133 8.75001 3.81567"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export const InfoIcon: React.FC<IconProps> = ({
  className = '',
  fill = 'fill-error-800',
  stroke = 'stroke-error-800',
  ...props
}) => {
  return (
    <svg
      className={className}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={stroke}
        d="M6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path className={stroke} d="M5.625 5.625H6V8.25H6.375" strokeLinecap="round" strokeLinejoin="round" />
      <path
        className={fill}
        d="M5.90625 4.5C6.21691 4.5 6.46875 4.24816 6.46875 3.9375C6.46875 3.62684 6.21691 3.375 5.90625 3.375C5.59559 3.375 5.34375 3.62684 5.34375 3.9375C5.34375 4.24816 5.59559 4.5 5.90625 4.5Z"
      />
    </svg>
  )
}

export const PlusIcon: React.FC<IconProps> = ({ className = '', ...props }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="32"
      viewBox="0 0 33 32"
      width="33"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5.5 16H27.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M16.5 5V27" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  )
}

export const WarningIcon: React.FC<IconProps> = ({
  className = 'stroke-neutral-100 dark:stroke-neutral-800 fill-neutral-100 dark:fill-neutral-800',
  fill = 'none',
  width = '20',
  height = '20',
  stroke = '#595959',
  ...props
}) => {
  return (
    <svg
      height={height}
      width={width}
      {...props}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 9.75V13.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M10.7063 3.74999L2.45634 18C2.32491 18.2276 2.2556 18.4858 2.25537 18.7487C2.25514 19.0115 2.32398 19.2698 2.45501 19.4977C2.58604 19.7256 2.77465 19.915 3.00194 20.0471C3.22923 20.1791 3.48723 20.2491 3.75009 20.25H20.2501C20.5129 20.2491 20.7709 20.1791 20.9982 20.0471C21.2255 19.915 21.4141 19.7256 21.5452 19.4977C21.6762 19.2698 21.745 19.0115 21.7448 18.7487C21.7446 18.4858 21.6753 18.2276 21.5438 18L13.2938 3.74999C13.1634 3.52206 12.975 3.33263 12.7479 3.20088C12.5207 3.06914 12.2627 2.99976 12.0001 2.99976C11.7375 2.99976 11.4795 3.06914 11.2523 3.20088C11.0251 3.33263 10.8368 3.52206 10.7063 3.74999V3.74999Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M13.0625 16.875C13.0625 17.4618 12.5868 17.9375 12 17.9375C11.4132 17.9375 10.9375 17.4618 10.9375 16.875C10.9375 16.2882 11.4132 15.8125 12 15.8125C12.5868 15.8125 13.0625 16.2882 13.0625 16.875Z"
        strokeWidth="0.125"
      />
    </svg>
  )
}

export const CircleCheckIcon: React.FC<IconProps> = ({
  className = 'stroke-neutral-100 dark:stroke-neutral-800',
  fill = 'none',
  width = '20',
  height = '20',
  stroke = '#595959',
  ...props
}) => {
  return (
    <svg
      height={height}
      width={width}
      {...props}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.125 9.75L10.6219 15L7.875 12.375" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export const CopyIcon: React.FC<IconProps> = ({ className, width = '24', height = '24', ...props }) => {
  return (
    <svg
      className={className}
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15.75 15.75H20.25V3.75H8.25V8.25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M15.75 8.25H3.75V20.25H15.75V8.25Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  )
}
