import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { useCreateMovieMutation } from "@/hooks/useMovies";
import { MultiSelect } from "@/components/ui/multi-select";

const options = [
  { value: "action", label: "Action" },
  { value: "adventure", label: "Adventure" },
  { value: "animation", label: "Animation" },
  { value: "biography", label: "Biography" },
  { value: "comedy", label: "Comedy" },
  { value: "crime", label: "Crime" },
  { value: "documentary", label: "Documentary" },
  { value: "drama", label: "Drama" },
  { value: "family", label: "Family" },
  { value: "fantasy", label: "Fantasy" },
  { value: "history", label: "History" },
  { value: "horror", label: "Horror" },
  { value: "musical", label: "Musical" },
  { value: "mystery", label: "Mystery" },
  { value: "romance", label: "Romance" },
  { value: "sci-fi", label: "Sci-Fi" },
  { value: "sport", label: "Sport" },
  { value: "thriller", label: "Thriller" },
  { value: "war", label: "War" },
  { value: "western", label: "Western" },
  { value: "action-comedy", label: "Action-Comedy" },
  { value: "romantic-comedy", label: "Romantic Comedy" },
  { value: "psychological-thriller", label: "Psychological Thriller" },
  { value: "superhero", label: "Superhero" },
  { value: "slasher", label: "Slasher" },
  { value: "coming-of-age", label: "Coming-of-Age" },
  { value: "disaster", label: "Disaster" },
  { value: "noir", label: "Noir" },
  { value: "neo-noir", label: "Neo-Noir" },
  { value: "fantasy-adventure", label: "Fantasy Adventure" },
  { value: "period-drama", label: "Period Drama" },
  { value: "zombie", label: "Zombie" },
  { value: "vampire", label: "Vampire" },
  { value: "cyberpunk", label: "Cyberpunk" },
  { value: "steampunk", label: "Steampunk" },
  { value: "political-thriller", label: "Political Thriller" },
  { value: "mockumentary", label: "Mockumentary" },
  { value: "found-footage", label: "Found Footage" },
];

const NewMoviePage = () => {
  const { isPending, mutateAsync: createMovie } = useCreateMovieMutation();
  const [poster, setPoster] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [releaseDate, setReleaseDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [duration, setDuration] = useState<number>(0);
  const [genre, setGenre] = useState([]);

  const handleNewMovie = async (e: React.FormEvent) => {
    e.preventDefault();

    // received releasedDate as "Wed May 28 2025 00:00:00 GMT+0800 (Philippine Standard Time)";
    await createMovie({
      poster,
      title,
      description,
      releaseDate: new Date(releaseDate!).toISOString(),
      endDate: new Date(endDate!).toISOString(),
      duration,
      genre: genre.map((item: { label: string; value: string }) => item.value),
    });

    console.log();
  };

  const handleChange = (selected: any) => {
    setGenre(selected || []);
  };

  return (
    <div className="flex h-full items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>New Movie</CardTitle>
          <CardDescription>
            Add movie to the list by filling out the fields
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleNewMovie} className="flex flex-col gap-6">
            <div className="flex flex-col space-y-3">
              <div className="flex flex-col space-y-1">
                <Label htmlFor="poster">Poster</Label>
                <Input
                  id="poster"
                  value={poster}
                  onChange={({ target }) => setPoster(target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={({ target }) => setTitle(target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={description}
                  onChange={({ target }) => setDescription(target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="genre">Genre</Label>

                <MultiSelect
                  value={genre}
                  onChange={handleChange}
                  isMulti
                  options={options}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="duration">Duration (in minutes)</Label>
                <Input
                  type="number"
                  id="duration"
                  value={duration}
                  onChange={({ target }) => setDuration(Number(target.value))}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="release-date">Release Date</Label>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !releaseDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon />{" "}
                      {releaseDate ? (
                        format(releaseDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    {" "}
                    <Calendar
                      id="release-date"
                      mode="single"
                      selected={releaseDate}
                      onSelect={setReleaseDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="end-date">End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !endDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon />{" "}
                      {endDate ? (
                        format(endDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      id="release-date"
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <Button disabled={isPending} type="submit">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewMoviePage;
