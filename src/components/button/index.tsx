import styles from './index.module.scss';

type ButtonProps = {
    children: React.ReactNode;
    color?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    variant?: 'contained' | 'outlined' | 'text';
    onClick?: () => void;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({
    children,
    color = 'primary',
    size = 'medium',
    variant = 'contained',
    className,
    ...props
}: ButtonProps) => {
    const classNames = [
        className,
        styles.button,
        styles[`button--${color}`],
        styles[`button--${size}`],
        styles[`button--${variant}`]
    ]
        .filter(Boolean)
        .join(' ');
    return (
        <button {...props} className={classNames}>
            {children}
        </button>
    );
};
