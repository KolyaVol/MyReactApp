import { useMemo } from "react";


export const useSortedPosts = (posts, sort) => {
    const sortPosts = useMemo((sort) => {
        if(sort) {
            return ([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
        }
        return posts
    }, [sort, posts])
    
    return sortPosts
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = usePosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts
}