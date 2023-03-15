import { AvatarList } from '@/components/avatar-list';
import { Card } from '@/components/card';
import { Flex } from '@/components/flex';
import { Grid } from '@/components/grid';
import { Tag } from '@/components/tag';
import { Typography } from '@/components/typography';

type RepositoriesListProps = {};
export const RepositoriesList = (props: RepositoriesListProps) => {
    return (
        <Grid container padding={[6, 0]}>
            {Array(10)
                .fill(10)
                .map(() => {
                    return (
                        <Grid item>
                            <Card padding={[2, 1, 2, 4]}>
                                <Flex justifyContent="space-between">
                                    <Flex
                                        direction="column"
                                        justifyContent="center"
                                    >
                                        <Typography variant="h5">
                                            Repository Name
                                        </Typography>
                                        <Typography variant="body2" light>
                                            By Ibrahim Rahhal
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
                                            return (
                                                <Tag size="small">Python</Tag>
                                            );
                                        })}
                                </Grid>
                            </Card>
                        </Grid>
                    );
                })}
        </Grid>
    );
};
