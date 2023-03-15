import type {
    RepositoriesQueryResponse,
    UsersQueryResponse
} from '@ibrahim-rahhal/github-search-api';
import { Flex } from '@/components/flex';
import { Typography } from '@/components/typography';
import { CollaboratorsList } from '@/sections/home/collaborators-list';
import { RepositoriesList } from '@/sections/home/repositories-list';
import Link from 'next/link';
import styles from './index.module.scss';

type SearchResultsProps = {
    active?: 'users' | 'repositories';
    query: string;
    loading?: boolean;
    loadingMore: () => void;
    hasMore: boolean;
    data: RepositoriesQueryResponse | UsersQueryResponse | null;
};
export const SearchResults = ({
    active = 'users',
    query,
    loading = false,
    hasMore,
    data = null,
    loadingMore
}: SearchResultsProps) => {
    return (
        <section className={styles.hero} aria-label="repository query results">
            <Flex margin={[6, 0, 1.5, 0]}>
                <Link
                    href={{
                        pathname: '/',
                        query: {
                            by: 'users',
                            query
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
                            by: 'repositories',
                            query
                        }
                    }}
                >
                    <Typography variant="h3" light={active !== 'repositories'}>
                        Repositories
                    </Typography>
                </Link>
            </Flex>
            {data && <Typography variant="body1" light>
                        Found {data?.total_count} Results
            </Typography>}
            {active === 'users' && (
                <CollaboratorsList
                    loading={loading}
                    loadMore={loadingMore}
                    hasMore={hasMore}
                    collaborators={(data as UsersQueryResponse)?.items?.map(
                        (user) => ({
                            id: user.id.toString(),
                            avatar: user.avatar_url,
                            name: user.login,
                            profileUrl: user.html_url
                        })
                    )}
                />
            )}
            {active === 'repositories' && (
                <RepositoriesList
                    loading={loading}
                    loadMore={loadingMore}
                    hasMore={hasMore}
                    repositories={(
                        data as RepositoriesQueryResponse
                    )?.items?.map((repo) => ({
                        id: repo.id.toString(),
                        name: repo.name,
                        owner: {
                            name: repo.owner?.login,
                            profileUrl: repo.owner?.html_url
                        }
                    }))}
                />
            )}
        </section>
    );
};
