import { SpacingHOC } from '@/components/spacing';
import styles from './index.module.scss';
import { memo } from 'react';

type ContainerProps = {} & React.HTMLAttributes<HTMLDivElement>;

const _Container = ({ children, className, ...rest }: ContainerProps) => {
    const classNames = [className, styles.container].filter(Boolean).join(' ');
    return (
        <div {...rest} className={classNames}>
            {children}
        </div>
    );
};

export const Container = memo(SpacingHOC(_Container));
