import { Flex } from '@/components/flex';
import styles from './index.module.scss';
import { Typography } from '@/components/typography';
import Link from 'next/link';

export const SearchResults = () => {
    return (
        <section className={styles.hero} aria-label="repository query results">
            <Flex margin={[6, 0, 1.5, 0]}>
                <Link
                    href={{
                        pathname: '/',
                        query: {
                            by: 'users'
                        }
                    }}
                >
                    <Typography variant="h3">Collaborators</Typography>
                </Link>
                <Typography variant="h3" light margin={[0, 1, 0, 1]}>
                    /
                </Typography>
                <Link
                    href={{
                        pathname: '/',
                        query: {
                            by: 'repositories'
                        }
                    }}
                >
                    <Typography variant="h3" light>
                        Repositories
                    </Typography>
                </Link>
            </Flex>
        </section>
    );
};
