import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Flex } from '@/components/flex';
import { Typography } from '@/components/typography';
import { CollaboratorsList } from '@/sections/home/collaborators-list';
import { RepositoriesList } from '@/sections/home/repositories-list';
import Link from 'next/link';
import styles from './index.module.scss';

export const SearchResults = () => {
    const router = useRouter();
    const { by, query } = router.query;
    useEffect(() => {
        if (router.isReady && !by)
            router.push({
                pathname: '/',
                query: {
                    by: 'users'
                }
            });
    }, [by]);
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
                    <Typography variant="h3" light={by !== 'users'}>
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
                    <Typography variant="h3" light={by !== 'repositories'}>
                        Repositories
                    </Typography>
                </Link>
            </Flex>
            {by === 'users' && <CollaboratorsList />}
            {by === 'repositories' && <RepositoriesList />}
        </section>
    );
};
