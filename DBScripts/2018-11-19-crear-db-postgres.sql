CREATE TABLE public."Usuario"
(
    "IdUsuario" serial NOT NULL,
    "Avatar" character varying,
    "Nombre" character varying NOT NULL,
    "Email" character varying NOT NULL,
    "Direccion" character varying,
    PRIMARY KEY ("IdUsuario")
);




CREATE TABLE public."Raza"
(
    "IdRaza" serial NOT NULL,
    "Descripcion" character varying NOT NULL,
    PRIMARY KEY ("IdRaza")
);


CREATE TABLE public."Mascota"
(
    "IdMascota" serial NOT NULL,
    "IdUsuario" integer NOT NULL,
    "IdRaza" integer NOT NULL,
    "Nombre" character varying NOT NULL,
    "Perdida" boolean NOT NULL DEFAULT false,
    PRIMARY KEY ("IdMascota"),
    FOREIGN KEY ("IdUsuario")
        REFERENCES public."Usuario" ("IdUsuario") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    FOREIGN KEY ("IdRaza")
        REFERENCES public."Raza" ("IdRaza") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);


CREATE TABLE public."ImagenMascota"
(
    "IdImagen" serial NOT NULL,
    "IdMascota" integer,
    "Localizacion" character varying,
    "ImagenPath" character varying NOT NULL,
    PRIMARY KEY ("IdImagen"),
    FOREIGN KEY ("IdMascota")
        REFERENCES public."Mascota" ("IdMascota") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);





