import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NSMovieList from "@/features/movies/NSMovieList";
import UMovieList from "@/features/movies/UMovieList";
import { Plus } from "lucide-react";
import { Link } from "react-router";

const MoviesPage = () => {
  return (
    <section className="mx-auto max-w-xl space-y-10 md:max-w-4xl lg:max-w-6xl">
      <Tabs defaultValue="now-showing" className="mx-auto w-full">
        <div className="flex space-x-1">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="now-showing">Now showing</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          </TabsList>
          <Link to={"/movies/new"}>
            <Button size={"icon"}>
              <Plus />
            </Button>
          </Link>
        </div>

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
