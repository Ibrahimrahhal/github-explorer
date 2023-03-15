import { AvatarList } from '@/components/avatar-list';
import { Card } from '@/components/card';
import { Flex } from '@/components/flex';
import { Grid } from '@/components/grid';
import { Tag } from '@/components/tag';
import { Typography } from '@/components/typography';

type RepositoriesListProps = {
    loading?: boolean;
    repositories?: {
        id: string;
        name: string;
        owner: {
            name: string;
            profileUrl: string;
        };
    }[];
};
export const RepositoriesList = ({
    loading = false,
    repositories = []
}: RepositoriesListProps) => {
    if (loading) return <Typography variant="h3">Loading...</Typography>;
    return (
        <Grid container padding={[6, 0]}>
            {repositories.map((repo) => {
                return (
                    <Grid item>
                        <Card padding={[2, 1, 2, 4]}>
                            <Flex justifyContent="space-between">
                                <Flex
                                    direction="column"
                                    justifyContent="center"
                                >
                                    <Typography variant="h5">
                                        {repo.name}
                                    </Typography>
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
                                                src: 'https://avatars.githubusercontent.com/u/24377288?v=4'
                                            },
                                            {
                                                alt: 'Ibrahim Rahhal',
                                                src: 'https://avatars.githubusercontent.com/u/24377288?v=4'
                                            },
                                            {
                                                alt: 'Ibrahim Rahhal',
                                                src: 'https://avatars.githubusercontent.com/u/24377288?v=4'
                                            }
                                        ]}
                                    />
                                </Flex>
                            </Flex>
                            <Grid container gap={1} margin={[3, 0, 0, 0]}>
                                {Array(3)
                                    .fill(1)
                                    .map((_, index) => {
                                        return <Tag size="small">Python</Tag>;
                                    })}
                            </Grid>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
};
