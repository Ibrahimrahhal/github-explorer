import { Flex } from '@/components/flex';
import { Typography } from '@/components/typography';
import styles from './index.module.scss';
import { Input } from '@/components/input';
import { Button } from '@/components/button';

export const Hero = () => {
    return (
        <section className={styles.hero} aria-label="search section">
            <Flex 
                direction='column' 
                alignItems='center' 
                justifyContent='center'
                className={styles.hero__content}
                > 
                <Typography variant='h1' color='primary' align='center' display='block'>
                    Explore Github With Ease
                </Typography>
                <Flex justifyContent='center' margin={[4, 0]}>
                    <Input placeholder='Search Query'/>
                    <Button>Explore</Button>
                </Flex>
            </Flex>
        </section>
    );
};
