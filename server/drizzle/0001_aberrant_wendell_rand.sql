CREATE TABLE "theaters" (
	"theater_id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "theaters_theater_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(100) NOT NULL,
	"location" varchar(255) NOT NULL,
	"seat_capacity" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
