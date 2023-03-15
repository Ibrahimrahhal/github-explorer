import { Avatar } from '@/components/avatar';
import { Card } from '@/components/card';
import { Flex } from '@/components/flex';
import { Grid } from '@/components/grid';
import { Typography } from '@/components/typography';

type CollaboratorsListProps = {
    loading?: boolean;
    collaborators?: {
        id: string;
        avatar: string;
        name: string;
        profileUrl: string;
    }[];
};
export const CollaboratorsList = ({
    loading = false,
    collaborators = []
}: CollaboratorsListProps) => {
    if (loading) return <Typography variant="h3">Loading...</Typography>;
    return (
        <Grid container padding={[6, 0]}>
            {collaborators.map((collaborator) => {
                return (
                    <Grid item>
                        <Card padding={[2, 4]}>
                            <Flex>
                                <Avatar
                                    alt={collaborator.name}
                                    src={collaborator.avatar}
                                />
                                <Flex
                                    direction="column"
                                    justifyContent="center"
                                    padding={[0, 1.5]}
                                >
                                    <Typography variant="h5">
                                        {collaborator.name}
                                    </Typography>
                                    <a
                                        href={collaborator.profileUrl}
                                        target="_blank"
                                    >
                                        <Typography variant="body2" light>
                                            View Profile
                                        </Typography>
                                    </a>
                                </Flex>
                            </Flex>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
};
