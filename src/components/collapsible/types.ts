export type CollapsibleProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  heading: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  className?: string;
}