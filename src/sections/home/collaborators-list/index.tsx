import { Avatar } from '@/components/avatar';
import { Card } from '@/components/card';
import { Flex } from '@/components/flex';
import { Grid } from '@/components/grid';
import { InfiniteScroll } from '@/components/infinite-scroll';
import { Typography } from '@/components/typography';
import { memo } from 'react';

type Collaborator = {
    id: string;
    avatar: string;
    name: string;
    profileUrl: string;
};
type CollaboratorsListProps = {
    loading?: boolean;
    loadMore: () => void;
    hasMore: boolean;
    collaborators?: Collaborator[];
};

const RenderCollaborator = memo(({item}: {item: Collaborator}) => {
    const collaborator = item;
    return (
        <Grid item key={collaborator.id}>
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
});

export const CollaboratorsList = ({
    loading = false,
    collaborators = [],
    loadMore,
    hasMore
}: CollaboratorsListProps) => {
    return (
        <Grid container padding={[6, 0]}>
            <InfiniteScroll
                loading={loading}
                elements={collaborators}
                loadMore={loadMore}
                hasMore={hasMore}
                renderElement={RenderCollaborator}
            />
        </Grid>
    );
};
