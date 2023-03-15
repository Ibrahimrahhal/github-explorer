import { Flex } from '@/components/flex';
import { Typography } from '@/components/typography';
import styles from './index.module.scss';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { Form } from '@/components/form';

type HeroProps = {
    onQueryChange: (query: string) => void;
};

export const Hero = ({ onQueryChange }: HeroProps) => {
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
                <Form
                    onFormSubmit={({ event, values }) => {
                        event.preventDefault();
                        onQueryChange(values.searchQuery as string);
                    }}
                >
                    <Flex justifyContent="center" margin={[6, 0]}>
                        <Input
                            placeholder="Search Query"
                            padding={[2, 10, 2, 2]}
                            margin={[0, 2, 0, 0]}
                            name="searchQuery"
                            required
                        />
                        <Button type="submit">Explore</Button>
                    </Flex>
                </Form>
            </Flex>
        </section>
    );
};
