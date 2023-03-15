import { Avatar } from '@/components/avatar';
import { Card } from '@/components/card';
import { Flex } from '@/components/flex';
import { Grid } from '@/components/grid';
import { Typography } from '@/components/typography';

type CollaboratorsListProps = {};
export const CollaboratorsList = (props: CollaboratorsListProps) => {
    return (
        <Grid container padding={[6, 0]}>
            {Array(10)
                .fill(10)
                .map(() => {
                    return (
                        <Grid item>
                            <Card padding={[2, 4]}>
                                <Flex>
                                    <Avatar
                                        alt="Ibrahim Rahhal"
                                        src="https://avatars.githubusercontent.com/u/24377288?v=4"
                                    />
                                    <Flex
                                        direction="column"
                                        justifyContent="center"
                                        padding={[0, 1.5]}
                                    >
                                        <Typography variant="h5">
                                            Ibrahim Rahhal
                                        </Typography>
                                        <Typography variant="body2" light>
                                            View Profile
                                        </Typography>
                                    </Flex>
                                </Flex>
                            </Card>
                        </Grid>
                    );
                })}
        </Grid>
    );
};
