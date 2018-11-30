CREATE TABLE public."ConsultasWatson"
(
    "IdConsulta" serial NOT NULL,
    "Clase" character varying(25) NULL,
    "Score" real NULL,
    "IdImagen" integer NOT NULL,
    PRIMARY KEY ("IdConsulta"),
    CONSTRAINT "FK_ImagenMascota_ConsultasWatson" FOREIGN KEY ("IdImagen")
        REFERENCES public."ImagenMascota" ("IdImagen") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);