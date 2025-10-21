export interface InputProps {
  label: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}