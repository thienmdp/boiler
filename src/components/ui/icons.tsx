import {
  LucideProps,
  Moon,
  SunMedium,
  LucideIcon,
  ScanFace,
  KeyRound,
  Key,
  BadgePlus,
  BadgeX,
  BadgeInfo,
  ShieldPlus,
  UserRoundPlus,
  Newspaper,
  Layers,
  Briefcase,
  LogOut,
  MoonStar,
  CloudSun,
  WalletMinimal,
  ShoppingCart,
  FileCheck2Icon,
  CircleUser,
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircuitBoardIcon,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  LayoutDashboardIcon,
  Loader2,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  Trash,
  User2Icon,
  UserX2Icon,
  Boxes,
  ListCollapse,
  BanknoteIcon,
  AArrowDown,
  AArrowUp,
  X
} from 'lucide-react'
import Image from 'next/image'

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  login: ScanFace,
  register: KeyRound,
  key: Key,
  check: Check,
  badgePlus: BadgePlus,
  badgeX: BadgeX,
  badgeInfo: BadgeInfo,
  shieldPlus: ShieldPlus,
  userRoundPlus: UserRoundPlus,
  newspaper: Newspaper,
  layers: Layers,
  briefcase: Briefcase,
  logout: LogOut,
  moonStar: MoonStar,
  cloudSun: CloudSun,
  walletMinimal: WalletMinimal,
  shoppingCart: ShoppingCart,
  FileCheck2Icon: FileCheck2Icon,
  user: CircleUser,
  dashboard: LayoutDashboardIcon,
  logos: Command,
  close: X,
  profile: User2Icon,
  spinner: Loader2,
  kanban: CircuitBoardIcon,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  employee: UserX2Icon,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  boxes: Boxes,
  listCollapse: ListCollapse,
  banknote: BanknoteIcon,
  aArrowDown: AArrowDown,
  aArrowUp: AArrowUp,
  logo: () => <Image src={'/metamask.png'} alt='' height={62} width={62} />,
  gitHub: (props: LucideProps) => (
    <svg viewBox='0 0 438.549 438.549' {...props}>
      <path
        fill='currentColor'
        d='M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z'
      ></path>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg xmlns='http://www.w3.org/2000/svg' {...props} x='0px' y='0px' viewBox='0 0 50 50'>
      <path
        d='M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z'
        stroke='#eff7fa'
        stroke-width='2'
      ></path>
    </svg>
  ),
  youtube: (props: LucideProps) => (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' {...props} x='0px' y='0px' viewBox='0,0,256,256'>
      <defs>
        <linearGradient x1='9.816' y1='9.871' x2='41.246' y2='41.301' gradientUnits='userSpaceOnUse' id='color-1'>
          <stop offset='0' stop-color='#fc5d67'></stop>
          <stop offset='0.443' stop-color='#ee3d4a'></stop>
          <stop offset='1' stop-color='#e52030'></stop>
        </linearGradient>
      </defs>
      <g
        fill='none'
        fill-rule='nonzero'
        stroke='none'
        stroke-width='1'
        stroke-linecap='butt'
        stroke-linejoin='miter'
        stroke-miterlimit='10'
        stroke-dasharray=''
        stroke-dashoffset='0'
        font-family='none'
        font-weight='none'
        font-size='none'
        text-anchor='none'
      >
        <g transform='scale(5.33333,5.33333)'>
          <path
            d='M45.012,34.56c-0.439,2.24 -2.304,3.947 -4.608,4.267c-3.621,0.533 -9.656,1.173 -16.459,1.173c-6.693,0 -12.728,-0.64 -16.459,-1.173c-2.304,-0.32 -4.17,-2.027 -4.608,-4.267c-0.439,-2.453 -0.878,-6.08 -0.878,-10.56c0,-4.48 0.439,-8.107 0.878,-10.56c0.439,-2.24 2.304,-3.947 4.608,-4.267c3.621,-0.533 9.656,-1.173 16.459,-1.173c6.803,0 12.728,0.64 16.459,1.173c2.304,0.32 4.17,2.027 4.608,4.267c0.439,2.453 0.988,6.08 0.988,10.56c-0.11,4.48 -0.549,8.107 -0.988,10.56z'
            fill='url(#color-1)'
          ></path>
          <path
            d='M32.352,22.44l-11.436,-7.624c-0.577,-0.385 -1.314,-0.421 -1.925,-0.093c-0.611,0.327 -0.991,0.96 -0.991,1.653v15.248c0,0.693 0.38,1.327 0.991,1.654c0.278,0.149 0.581,0.222 0.884,0.222c0.364,0 0.726,-0.106 1.04,-0.315l11.436,-7.624c0.523,-0.349 0.835,-0.932 0.835,-1.56c0.001,-0.629 -0.312,-1.212 -0.834,-1.561z'
            fill='#000000'
            opacity='0.05'
          ></path>
          <path
            d='M20.681,15.237l10.79,7.194c0.689,0.495 1.153,0.938 1.153,1.513c0,0.575 -0.224,0.976 -0.715,1.334c-0.371,0.27 -11.045,7.364 -11.045,7.364c-0.901,0.604 -2.364,0.476 -2.364,-1.499v-14.399c0,-2.005 1.584,-1.905 2.181,-1.507z'
            fill='#000000'
            opacity='0.07'
          ></path>
          <path
            d='M19,31.568v-15.135c0,-0.743 0.828,-1.187 1.447,-0.774l11.352,7.568c0.553,0.368 0.553,1.18 0,1.549l-11.352,7.568c-0.619,0.411 -1.447,-0.032 -1.447,-0.776z'
            fill='#ffffff'
          ></path>
        </g>
      </g>
    </svg>
  )
}
