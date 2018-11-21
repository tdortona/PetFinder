ALTER TABLE public."ImagenMascota"
    ADD COLUMN "IdUsuario" integer NOT NULL;
ALTER TABLE public."ImagenMascota"
    ADD FOREIGN KEY ("IdUsuario")
    REFERENCES public."Usuario" ("IdUsuario") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;