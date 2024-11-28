import { useEffect, useState } from 'react';
import {
  useGetTopStoriesQuery,
  useLazyGetStoryDetailsQuery,
} from '../../../libs/model/news/api/news.api';

import { Story, FormattedStory } from '../../../shared/types';

export const useLatestStories = () => {
  const { data: topStoryIds, isLoading: loadingTopStories } = useGetTopStoriesQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({ data, isLoading }),
  });

  const [fetchStoryDetails] = useLazyGetStoryDetailsQuery();
  const [stories, setStories] = useState<FormattedStory[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Состояние общего индикатора загрузки

  useEffect(() => {
    const fetchDetails = async () => {
      if (!topStoryIds) return;

      setLoading(true); // Устанавливаем состояние загрузки

      const top100Ids = topStoryIds.slice(0, 100); // Берем первые 100 ID
      try {
        const storyPromises = top100Ids.map((id) => fetchStoryDetails(id).unwrap());
        const fetchedStories = await Promise.all(storyPromises);

        const formattedStories: FormattedStory[] = fetchedStories.map((story) => ({
          title: story.title,
          rating: story.score,
          author: story.by,
          date: new Date(story.time * 1000).toLocaleString(),
          commentsCount: story.descendants || 0,
        }));

        formattedStories.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setStories(formattedStories);
      } catch (error) {
        console.error('Error fetching story details:', error);
      } finally {
        setLoading(false); // Снимаем состояние загрузки после завершения
      }
    };

    fetchDetails();
  }, [topStoryIds, fetchStoryDetails]);

  return { stories, loading };
};
