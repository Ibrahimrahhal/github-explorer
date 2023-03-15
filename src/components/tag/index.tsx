import { memo } from 'react';
import styles from './index.module.scss';

type TagProps = {
    color?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
} & React.HTMLAttributes<HTMLDivElement>;

const _Tag = ({
    color = 'primary',
    size = 'medium',
    children,
    className,
    ...rest
}: TagProps) => {
    const classNames = [
        className,
        styles.tag,
        styles[`tag--${color}`],
        styles[`tag--${size}`]
    ]
        .filter(Boolean)
        .join(' ');
    return (
        <div {...rest} className={classNames}>
            {children}
        </div>
    );
};

export const Tag = memo(_Tag);
