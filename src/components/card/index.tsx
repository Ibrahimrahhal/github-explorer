import { SpacingHOC } from '@/components/spacing';
import styles from './index.module.scss';
import { memo } from 'react';

type CardProps = {} & React.HTMLAttributes<HTMLDivElement>;

const _Card = ({ children, className, ...rest }: CardProps) => {
    const classNames = [className, styles.card].filter(Boolean).join(' ');
    return (
        <div data-testid="card" {...rest} className={classNames}>
            {children}
        </div>
    );
};

export const Card = memo(SpacingHOC(_Card));
