import React from 'react';
import { SpacingHOC } from '@/components/spacing';
import styles from './index.module.scss';

type FlexProps = {
    children: React.ReactNode;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
} & React.HTMLAttributes<HTMLDivElement>;

const _Flex = ({
    children,
    direction = 'row',
    wrap = 'nowrap',
    justifyContent = 'flex-start',
    alignItems = 'stretch',
    className,
    ...props
}: FlexProps) => {
    const classNames = [
        className,
        styles.flex,
        styles[`flex--${direction}`],
        styles[`flex--${wrap}`],
        styles[`flex--justify-${justifyContent}`],
        styles[`flex--align-${alignItems}`]
    ]
        .filter(Boolean)
        .join(' ');
    return (
        <div className={classNames} {...props}>
            {children}
        </div>
    );
};

export const Flex = SpacingHOC<FlexProps>(_Flex);
