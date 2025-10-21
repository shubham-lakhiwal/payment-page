import FreezeIcon from '@/assets/icons/card/freeze.svg?react';
import DeactivateIcon from '@/assets/icons/card/deactivate.svg?react';
import GpayIcon from '@/assets/icons/card/gpay.svg?react';
import ReplaceIcon from '@/assets/icons/card/replace.svg?react';
import SetLimitIcon from '@/assets/icons/card/set-limit.svg?react';
import Text from '@/components/text/Text.tsx';
import styles from "./CardsCta.module.scss";

const CARDS_CTA = [
  {
    action: 'freeze',
    label: 'Freeze card',
    icon: FreezeIcon
  },
  {
    action: 'setSpendLimit',
    label: 'Set spend limit',
    icon: SetLimitIcon
  },
  {
    action: 'addToGpay',
    label: 'Add to GPay',
    icon: GpayIcon
  },
  {
    action: 'replaceCard',
    label: 'Replace card',
    icon: ReplaceIcon
  },
  {
    action: 'cancelCard',
    label: 'Cancel card',
    icon: DeactivateIcon
  },
]

const CardsCta = () => {
  return <>
    {
      CARDS_CTA.map((cardCta) => {
        const Icon = cardCta.icon;
        return (<div key={cardCta.action} className={styles.cta}>
          <Icon />
          <Text>{cardCta.label}</Text>
        </div>)
      })
    }
  </>;
}

export default CardsCta;