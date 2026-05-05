import { useQuery } from '@tanstack/react-query';

export const getHomeImage = () => {
    const { data, isLoading, isError, refetch } = useQuery({
      queryKey: ["get-home-image"],
      queryFn: async() => await fetch("/src/assets/images/a-colorful-night-sky-with-stars-and-clouds-photo.jpeg"),
      gcTime: 1000*60*60,
      staleTime: 1000*60*60,
    });
  
    return {
      homeImage: data,
      isHomeImageLoading: isLoading,
      isError: isError,
      getHomeImage: refetch    
    };
  };