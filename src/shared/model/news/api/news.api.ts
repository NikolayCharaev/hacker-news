//@ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { Story, FormattedStory } from '../types/news.types'; // Импортируйте типы

export const hackerNewsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),

  endpoints: (builder) => ({
    getTopStories: builder.query<number[], void>({
      query: () => `topstories.json`,
    }),

    getStoryDetails: builder.query<Story, number>({
      query: (id) => `item/${id}.json`,
    }),

    getFormattedTopStories: builder.query<FormattedStory[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          const { data: topStoryIds } = await fetchWithBQ<number[]>('topstories.json');
          if (!topStoryIds) {
            return { error: { status: 404, statusText: 'Top stories not found' } };
          }

          if (Array.isArray(topStoryIds)) {
            const top100Ids = topStoryIds.slice(0, 100);

            const storyPromises = top100Ids.map((id) =>
              fetchWithBQ<Story>(`item/${id}.json`).then((res) => res.data)
            );

            const fetchedStories = await Promise.all(storyPromises);

            const formattedStories: FormattedStory[] = fetchedStories.map((story : Story) => ({
              title: story.title,
              rating: story.score,
              id: story.id,
              author: story.by,
              date: new Date(story.time * 1000).toLocaleString(),
              commentsCount: story.descendants || 0,
            }));

            // Преобразуем дату в формат Date и сортируем от самой новой к самой старой
            formattedStories.sort((a, b) => {
              const dateA = new Date(a.date.split(',')[0].split('.').reverse().join('-') + " " + a.date.split(',')[1]);
              const dateB = new Date(b.date.split(',')[0].split('.').reverse().join('-') + " " + b.date.split(',')[1]);
              return dateB.getTime() - dateA.getTime();
            });

            return { data: formattedStories };
          } else {
            return { error: { status: 404, statusText: 'Top stories not found' } };
          }
        } catch (error) {
          toast.error('Произошла ошибка');
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
