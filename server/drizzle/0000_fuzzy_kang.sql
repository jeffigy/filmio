CREATE TABLE "movies" (
	"movie_id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "movies_movie_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"duration" integer NOT NULL,
	"genre" text[],
	"created_at" timestamp DEFAULT now() NOT NULL
);
