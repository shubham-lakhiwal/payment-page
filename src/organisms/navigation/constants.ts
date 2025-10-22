import HomeIcon from '@/assets/icons/menubar/home.svg?react';
import CardIcon from '@/assets/icons/menubar/card.svg?react';
import CreditIcon from '@/assets/icons/menubar/credit.svg?react';
import PaymentsIcon from '@/assets/icons/menubar/payments.svg?react';
import SettingsIcon from '@/assets/icons/menubar/settings.svg?react';
import type {NavItemProps} from "@/organisms/navigation/types.ts";

export const NAV_ITEMS: NavItemProps[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    icon: HomeIcon,
  },
  {
    id: 'cards',
    label: 'Cards',
    href: '/',
    active: true,
    icon: CardIcon,
  },
  {
    id: 'payments',
    label: 'Payments',
    href: '/',
    icon: PaymentsIcon,
  },
  {
    id: 'credit',
    label: 'Credit',
    href: '/',
    icon: CreditIcon,
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/',
    icon: SettingsIcon,
  }
]