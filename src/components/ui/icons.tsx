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
        strokeWidth='2'
      ></path>
    </svg>
  ),
  youtube: (props: LucideProps) => (
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 300.000000 300.000000'
      preserveAspectRatio='xMidYMid meet'
      {...props}
    >
      <g transform='translate(0.000000,300.000000) scale(0.100000,-0.100000)' fill='#ef4444' stroke='none'>
        <path d='M1165 2413 c-300 -14 -648 -48 -705 -68 -106 -37 -181 -127 -211 -250 -33 -141 -41 -284 -36 -666 5 -488 25 -595 128 -698 81 -81 121 -91 479 -121 476 -41 964 -37 1468 10 221 20 268 32 335 80 140 100 172 269 164 871 -4 394 -15 502 -62 605 -43 97 -133 164 -246 184 -241 42 -949 71 -1314 53z m470 -687 c195 -106 328 -184 339 -200 20 -26 20 -26 0 -52 -11 -15 -149 -96 -339 -200 -262 -142 -326 -173 -355 -171 -60 4 -60 9 -58 408 3 390 3 389 62 389 21 -1 136 -58 351 -174z' />{' '}
      </g>{' '}
    </svg>
  ),
  vietnam: (props: LucideProps) => (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0,0,256,256' width='24px' height='24px'>
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
          <circle cx='24' cy='24' r='20' fill='#e03030'></circle>
          <path
            d='M27.055,25.594l4.945,-3.594h-6.109l-1.891,-5.812l-1.891,5.812h-6.109l4.945,3.594l-1.891,5.813l4.946,-3.594l4.945,3.594z'
            fill='#ffeb3b'
          ></path>
        </g>
      </g>
    </svg>
  ),
  english: (props: LucideProps) => (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0,0,256,256' width='24px' height='24px'>
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
          <path d='M19,4.656c-4.055,1.046 -7.612,3.316 -10.243,6.413l10.243,6.262z' fill='#4356c4'></path>
          <path d='M8.605,36.764c2.644,3.185 6.265,5.515 10.395,6.581v-12.935z' fill='#4356c4'></path>
          <path d='M4.656,29c0.013,0.052 0.026,0.103 0.04,0.155l0.252,-0.155z' fill='#ffffff'></path>
          <path d='M39.576,11.469c-2.66,-3.301 -6.348,-5.723 -10.576,-6.813v13.277z' fill='#4356c4'></path>
          <path d='M29,43.344c4.303,-1.11 8.041,-3.603 10.711,-6.994l-10.711,-6.546z' fill='#4356c4'></path>
          <path d='M4.753,18.621c-0.035,0.125 -0.065,0.253 -0.097,0.379h0.717z' fill='#ffffff'></path>
          <path d='M43.751,21c-0.095,-0.63 -0.218,-1.249 -0.37,-1.858l-3.039,1.858z' fill='#ffffff'></path>
          <path d='M5.373,19h-0.717c-0.169,0.655 -0.304,1.321 -0.407,2h4.396z' fill='#ffffff'></path>
          <path d='M43.44,28.629c0.127,-0.535 0.228,-1.079 0.311,-1.629h-2.977z' fill='#ffffff'></path>
          <path d='M8.22,27h-3.971c0.102,0.679 0.238,1.345 0.407,2h0.293z' fill='#ffffff'></path>
          <path d='M21,18.553v-14.304c-0.679,0.102 -1.345,0.238 -2,0.407v12.675z' fill='#ffffff'></path>
          <path d='M27,28.582v15.169c0.679,-0.102 1.345,-0.238 2,-0.407v-13.54z' fill='#ffffff'></path>
          <path d='M19,30.41v12.934c0.655,0.169 1.321,0.304 2,0.407v-14.563z' fill='#ffffff'></path>
          <path
            d='M27.185,18.694l0.284,0.174l1.531,-0.936v-13.276c-0.655,-0.169 -1.321,-0.304 -2,-0.407v14.748z'
            fill='#ffffff'
          ></path>
          <path
            d='M8.645,21h9.39l2.965,-1.812v-0.634l-2,-1.223l-10.243,-6.262c-0.854,1.006 -1.613,2.094 -2.258,3.257l7.551,4.674h-5.456l-3.293,-2.047c-0.206,0.546 -0.39,1.101 -0.549,1.668l0.621,0.379z'
            fill='#ffffff'
          ></path>
          <path
            d='M27.469,18.868l3.488,2.132h9.385l3.039,-1.858c-0.325,-1.3 -0.775,-2.547 -1.341,-3.732l-5.762,3.59h-5.456l9.812,-6.1c-0.331,-0.494 -0.687,-0.969 -1.059,-1.431l-10.575,6.463z'
            fill='#ffffff'
          ></path>
          <path d='M14.05,19l-7.55,-4.674c-0.465,0.839 -0.856,1.72 -1.198,2.627l3.292,2.047z' fill='#e53935'></path>
          <path d='M36.278,19l5.763,-3.59c-0.415,-0.87 -0.874,-1.714 -1.406,-2.509l-9.813,6.099z' fill='#e53935'></path>
          <path
            d='M27,27v1.582l2,1.222l10.711,6.547c0.772,-0.981 1.456,-2.033 2.036,-3.15l-6.776,-4.201h5.456l2.459,1.534c0.215,-0.622 0.4,-1.256 0.553,-1.904l-2.665,-1.63z'
            fill='#ffffff'
          ></path>
          <path d='M30.957,21l-3.488,-2.132l-0.284,-0.174l-0.185,0.303v2.003z' fill='#ffffff'></path>
          <path
            d='M21,29.188v-2.188h-12.78l-3.272,2l-0.253,0.155c0.352,1.321 0.832,2.587 1.433,3.786l6.201,-3.941h5.456l-10.182,6.433c0.318,0.456 0.648,0.904 1.002,1.331l10.395,-6.354z'
            fill='#ffffff'
          ></path>
          <path d='M18.035,21h2.965v-1.812z' fill='#ffffff'></path>
          <path d='M34.971,29l6.775,4.2c0.444,-0.854 0.821,-1.746 1.14,-2.667l-2.459,-1.533z' fill='#e53935'></path>
          <path d='M12.329,29l-6.201,3.941c0.435,0.868 0.923,1.702 1.475,2.492l10.182,-6.433z' fill='#e53935'></path>
          <path
            d='M30.957,21h-3.957v6h13.774h2.977c0.148,-0.981 0.249,-1.978 0.249,-3c0,-1.022 -0.101,-2.019 -0.249,-3h-3.409z'
            fill='#e53935'
          ></path>
          <path
            d='M21,27v-6h-2.965h-9.39h-4.396c-0.148,0.981 -0.249,1.978 -0.249,3c0,1.022 0.101,2.019 0.249,3h3.971z'
            fill='#e53935'
          ></path>
          <path
            d='M27,43.751v-15.169v-1.582v-6v-2.003v-14.748c-0.981,-0.148 -1.978,-0.249 -3,-0.249c-1.022,0 -2.019,0.101 -3,0.249v14.304v0.634v1.813v6v2.188v14.563c0.981,0.148 1.978,0.249 3,0.249c1.022,0 2.019,-0.101 3,-0.249z'
            fill='#e53935'
          ></path>
        </g>
      </g>
    </svg>
  )
}
