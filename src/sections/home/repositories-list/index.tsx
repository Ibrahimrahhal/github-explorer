import { AvatarList } from '@/components/avatar-list';
import { Card } from '@/components/card';
import { Flex } from '@/components/flex';
import { Grid } from '@/components/grid';
import { InfiniteScroll } from '@/components/infinite-scroll';
import { Tag } from '@/components/tag';
import { Typography } from '@/components/typography';
import { memo } from 'react';
type Repository = {
    id: string;
    name: string;
    owner: {
        name: string;
        profileUrl: string;
    };
};
type RepositoriesListProps = {
    loading?: boolean;
    loadMore: () => void;
    hasMore: boolean;
    repositories?: Repository[];
};

const RenderRepository = memo(function _RenderRepository({
    item
}: {
    item: Repository;
}) {
    const repo = item;
    return (
        <Grid item key={repo.id}>
            <Card padding={[2, 1, 2, 4]}>
                <Flex justifyContent="space-between">
                    <Flex direction="column" justifyContent="center">
                        <Typography variant="h5">{repo.name}</Typography>
                        <Typography variant="body2" light>
                            By {repo.owner.name}
                        </Typography>
                    </Flex>
                    <Flex>
                        <AvatarList
                            size="extra-small"
                            avatars={[
                                {
                                    alt: 'Ibrahim Rahhal',
                                    src: 'https://avatars.githubusercontent.com/u/24377288?v=4&tttt=1'
                                },
                                {
                                    alt: 'Ibrahim Rahhal',
                                    src: 'https://avatars.githubusercontent.com/u/24377288?v=4&tttt=2'
                                },
                                {
                                    alt: 'Ibrahim Rahhal',
                                    src: 'https://avatars.githubusercontent.com/u/24377288?v=4&tttt=3'
                                }
                            ]}
                        />
                    </Flex>
                </Flex>
                <Grid container gap={1} margin={[3, 0, 0, 0]}>
                    {Array(3)
                        .fill(1)
                        .map((_, index) => {
                            return (
                                <Tag size="small" key={index}>
                                    Python
                                </Tag>
                            );
                        })}
                </Grid>
            </Card>
        </Grid>
    );
});
export const RepositoriesList = ({
    loading = false,
    repositories = [],
    loadMore,
    hasMore
}: RepositoriesListProps) => {
    return (
        <Grid container padding={[6, 0]}>
            <InfiniteScroll
                loading={loading}
                elements={repositories}
                loadMore={loadMore}
                hasMore={hasMore}
                renderElement={RenderRepository}
            />
        </Grid>
    );
};
