import styles from './index.module.scss';

type InputProps = {
    type?: 'text' | 'password' | 'email' | 'number';
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.HTMLAttributes<HTMLInputElement>;

export const Input = ({ type = 'text', placeholder, value }: InputProps) => {
    return <input type={type} placeholder={placeholder} value={value} />;
};
