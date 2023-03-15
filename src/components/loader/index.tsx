import { memo } from 'react';
import styles from './index.module.scss';

type LoaderProps = {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary';
} & React.HTMLAttributes<HTMLDivElement>;
const _Loader = ({
    size = 'medium',
    color,
    className,
    ...rest
}: LoaderProps) => {
    const classNames = [
        className,
        styles.loader,
        styles[`loader--${size}`],
        styles[`loader--${color}`]
    ]
        .filter(Boolean)
        .join(' ');
    return (
        <div {...rest} className={classNames}>
            <div></div>
            <div></div>
        </div>
    );
};

export const Loader = memo(_Loader);