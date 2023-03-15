import {  useEffect} from 'react';
import { Debounce } from '@/utils/debounce';
import { Loader } from '@/components/loader';
import { Flex } from '@/components/flex';
import styles from './index.module.scss';

type InfiniteScrollProps = {
    elements: any[];
    renderElement: React.FC<{
        item: any
    }>;
    loadMore: () => void;
    pageSize?: number;
    hasMore: boolean;
    loading?: boolean;
};

const handleLoadingMore = Debounce((loading: boolean, elements: any[], hasMore: boolean , loadMore: () => void) => {
        console.log('should load more', 
        window.innerHeight + window.scrollY >=
                document.body.offsetHeight ,
            !loading ,
            hasMore);
        if (
            window.innerHeight + window.scrollY >=
                document.body.offsetHeight &&
            !loading &&
            hasMore
        ) {
            loadMore();
        }
    }, 300)

export const InfiniteScroll = ({
    elements,
    renderElement: Element,
    loadMore,
    hasMore,
    loading = false
}: InfiniteScrollProps) => {

    useEffect(() => {
        const handleScroll = () => handleLoadingMore(loading, elements, hasMore, loadMore);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {elements.map(e => <Element  key={e.id} item={e} />)}
            {hasMore && (elements.length > 0 || loading) && (
                <Flex
                    justifyContent="center"
                    className={styles['infinite-scroll__loader-block']}
                >
                    <Loader />
                </Flex>
            )}
        </>
    );
};
