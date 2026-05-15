import { BadgeCheck, Clock3, type LucideIcon, ShieldCheck, Wallet } from 'lucide-react'

export interface AuthFeature {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

// Features for Login Page
export const LOGIN_FEATURES: AuthFeature[] = [
  {
    id: 'fast-transaction',
    icon: Clock3,
    title: 'Fast Transactions',
    description: 'Top up your favorite games in just a few seconds.',
  },
  {
    id: 'secure-payment',
    icon: ShieldCheck,
    title: 'Secure Payments',
    description: 'All transactions are protected with trusted security systems.',
  },
  {
    id: 'trusted-service',
    icon: BadgeCheck,
    title: 'Trusted Service',
    description: 'Trusted by gamers for fast and reliable top up services.',
  },
]

// Features for Register Page
export const REGISTER_FEATURES: AuthFeature[] = [
  {
    id: 'easy-registration',
    icon: BadgeCheck,
    title: 'Easy Registration',
    description: 'Create your account in just a few simple steps.',
  },
  {
    id: 'many-payment-methods',
    icon: Wallet,
    title: 'Multiple Payment Methods',
    description: 'Supports e-wallets, bank transfers, and digital payments.',
  },
  {
    id: 'secure-account',
    icon: ShieldCheck,
    title: 'Secure Account',
    description: 'Your account and transaction data are safely protected.',
  },
]
