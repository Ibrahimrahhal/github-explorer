import { InputHTMLAttributes } from 'react';
import { SpacingHOC } from '@/components/spacing';
import styles from './index.module.scss';

type InputProps = {
    type?: 'text' | 'password' | 'email' | 'number';
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const _Input = ({
    type = 'text',
    placeholder,
    value,
    className,
    ...rest
}: InputProps) => {
    const classNames = [className, styles.input].filter(Boolean).join(' ');
    return (
        <input
            {...rest}
            type={type}
            placeholder={placeholder}
            className={classNames}
            value={value}
        />
    );
};

export const Input = SpacingHOC<InputProps>(_Input);
