import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NSMovieList from "@/features/movies/NSMovieList";
import UMovieList from "@/features/movies/UMovieList";

const MoviesPage = () => {
  return (
    <section className="mx-auto max-w-xl space-y-10 md:max-w-4xl lg:max-w-6xl">
      <Tabs defaultValue="now-showing" className="mx-auto w-full">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="now-showing">Now showing</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>
        <TabsContent value="now-showing">
          <NSMovieList />
        </TabsContent>
        <TabsContent value="upcoming">
          <UMovieList />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default MoviesPage;
