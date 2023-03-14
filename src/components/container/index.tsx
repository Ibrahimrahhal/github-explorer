import { SpacingHOC } from '@/components/spacing';
import styles from './index.module.scss';

type ContainerProps = {} & React.HTMLAttributes<HTMLDivElement>;

const _Container = ({ children }: ContainerProps) => {
    return <div className={styles.container}>{children}</div>;
};

export const Container = SpacingHOC(_Container);
