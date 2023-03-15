import { Flex } from '@/components/flex';
import { Typography } from '@/components/typography';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { Form } from '@/components/form';
import styles from './index.module.scss';
import { FormEvent, useCallback } from 'react';

type HeroProps = {
    onQueryChange: (query: string) => void;
    initialQuery: string;
};

export const Hero = ({ onQueryChange, initialQuery }: HeroProps) => {
    const handleFormSubmit = useCallback(
        ({
            event,
            values
        }: {
            event: FormEvent<HTMLFormElement>;
            values: Record<string, FormDataEntryValue>;
        }) => {
            event.preventDefault();
            onQueryChange(values.searchQuery as string);
        },
        [onQueryChange]
    );
    return (
        <section className={styles.hero} aria-label="search section">
            <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                className={styles.hero__content}
            >
                <Typography
                    variant="h1"
                    color="primary"
                    align="center"
                    display="block"
                >
                    Explore Github With Ease
                </Typography>
                <Form onFormSubmit={handleFormSubmit}>
                    <Flex justifyContent="center" margin={[6, 0]}>
                        <Input
                            placeholder="Search Query"
                            padding={[2, 10, 2, 2]}
                            margin={[0, 2, 0, 0]}
                            name="searchQuery"
                            required
                            defaultValue={initialQuery}
                        />
                        <Button type="submit">Explore</Button>
                    </Flex>
                </Form>
            </Flex>
        </section>
    );
};
