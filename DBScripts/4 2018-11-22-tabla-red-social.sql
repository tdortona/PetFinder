CREATE TABLE IF NOT EXISTS public."RedSocial"
(
    "IdRedSocial" serial NOT NULL,
    "Nombre" character varying NOT NULL,
    PRIMARY KEY ("IdRedSocial")
);

INSERT INTO public."RedSocial" ("Nombre")
SELECT 'facebook'
WHERE
    NOT EXISTS (
        SELECT "IdRedSocial" FROM public."RedSocial" WHERE "Nombre" = 'facebook'
    );

INSERT INTO public."RedSocial" ("Nombre")
SELECT 'google'
WHERE
    NOT EXISTS (
        SELECT "IdRedSocial" FROM public."RedSocial" WHERE "Nombre" = 'google'
    );

DO $$ 
    BEGIN
        BEGIN
            ALTER TABLE public."Usuario"
                ADD COLUMN "IdRedSocial" integer;
        EXCEPTION
            WHEN duplicate_column THEN RAISE NOTICE 'column IdRedSocial already exist in table Usuario.';
        END;
    END;
$$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'Usuario_IdRedSocial_fkey') THEN
        ALTER TABLE public."Usuario" ADD CONSTRAINT "Usuario_IdRedSocial_fkey" 
        FOREIGN KEY ("IdRedSocial") REFERENCES public."RedSocial" ("IdRedSocial") ON UPDATE NO ACTION ON DELETE NO ACTION;
    END IF;
END;
$$;

