import { memo } from 'react';
import styles from './index.module.scss';

type FormProps = {
    children: React.ReactNode;
    onFormSubmit: (data: {
        event: React.FormEvent<HTMLFormElement>;
        values: Record<string, FormDataEntryValue>;
    }) => void;
} & React.HTMLAttributes<HTMLFormElement>;

const _Form = ({ children, onFormSubmit, className, ...props }: FormProps) => {
    return (
        <form
            {...props}
            onSubmit={(e) =>
                onFormSubmit &&
                onFormSubmit({
                    event: e,
                    values: Object.fromEntries(
                        new FormData(e.target as HTMLFormElement)
                    )
                })
            }
            className={className}
        >
            {children}
        </form>
    );
};

export const Form = memo(_Form);
