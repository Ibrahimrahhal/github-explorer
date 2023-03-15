import { SpacingHOC } from '@/components/spacing';
import styles from './index.module.scss';

type ContainerProps = {} & React.HTMLAttributes<HTMLDivElement>;

const _Container = ({ children, className, ...rest }: ContainerProps) => {
    const classNames = [className, styles.container].filter(Boolean).join(' ');
    return (
        <div {...rest} className={classNames}>
            {children}
        </div>
    );
};

export const Container = SpacingHOC(_Container);
