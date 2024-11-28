import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hackerNewsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hacker-news.firebaseio.com/v0/' }),
  endpoints: (builder) => ({
    getTopStories: builder.query<number[], void>({
      query: () => `topstories.json`,
    }),
    getStoryDetails: builder.query({
      query: (id) => `item/${id}.json`,
    }),
    getFormattedTopStories: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          const { data: topStoryIds } = await fetchWithBQ('topstories.json');
          if (!topStoryIds) {
            return { error: { status: 404, statusText: 'Top stories not found' } };
          }

          const top100Ids = (topStoryIds as number[]).slice(0, 100);
          const storyPromises = top100Ids.map((id) =>
            fetchWithBQ(`item/${id}.json`).then((res) => res.data)
          );

          const fetchedStories = await Promise.all(storyPromises);

          const formattedStories = fetchedStories.map((story) => ({
            title: story.title,
            rating: story.score,
            id: story.id,
            author: story.by,
            date: new Date(story.time * 1000).toLocaleString(),
            commentsCount: story.descendants || 0,
          }));

          formattedStories.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );

          return { data: formattedStories };
        } catch (error) {
          return { error: { status: 500, statusText: 'Failed to fetch stories' } };
        }
      },
    }),
  }),
});

export const {
  useGetTopStoriesQuery,
  useLazyGetStoryDetailsQuery,
  useGetFormattedTopStoriesQuery,
} = hackerNewsApi;
