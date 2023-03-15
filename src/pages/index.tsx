import Head from 'next/head';
import { useRouter } from 'next/router';
import { Hero } from '@/sections/home/hero';
import { SearchResults } from '@/sections/home/search-results';
import { Container } from '@/components/container';
import { useGithubSearch } from '@ibrahim-rahhal/github-search-api';
import { useEffect, useState } from 'react';

export default function Home() {
    const router = useRouter();
    const [page, setPage] = useState(1);
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
    const { data, loading, error } = useGithubSearch(
        by === 'users' ? 'users' : 'repositories',
        {
            query: query as string,
            page
        }
    );
    return (
        <>
            <Head>
                <title>Github Explorer</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Container>
                    <Hero
                        onQueryChange={(query: string) => {
                            router.push({
                                pathname: '/',
                                query: {
                                    by,
                                    query
                                }
                            });
                        }}
                    />
                    <SearchResults
                        loading={loading}
                        data={data}
                        query={query as string}
                        active={by as 'users' | 'repositories'}
                    />
                </Container>
            </main>
        </>
    );
}
