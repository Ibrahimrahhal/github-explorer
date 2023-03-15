import { Flex } from '@/components/flex';
import { Typography } from '@/components/typography';
import { CollaboratorsList } from '@/sections/home/collaborators-list';
import { RepositoriesList } from '@/sections/home/repositories-list';
import Link from 'next/link';
import styles from './index.module.scss';

type SearchResultsProps = {
    active?: 'users' | 'repositories';
};
export const SearchResults = ({ active = 'users' }: SearchResultsProps) => {
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
                    <Typography variant="h3" light={active !== 'users'}>
                        Collaborators
                    </Typography>
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
                    <Typography variant="h3" light={active !== 'repositories'}>
                        Repositories
                    </Typography>
                </Link>
            </Flex>
            {active === 'users' && <CollaboratorsList />}
            {active === 'repositories' && <RepositoriesList />}
        </section>
    );
};
