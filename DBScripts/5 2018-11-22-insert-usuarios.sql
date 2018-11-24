DO $$ 
    BEGIN
        BEGIN
            AALTER TABLE public."Usuario"
    ADD COLUMN "IdUsuarioRedSocial" character varying;
        EXCEPTION
            WHEN duplicate_column THEN RAISE NOTICE 'column IdUsuarioRedSocial already exist in table Usuario.';
        END;
    END;
$$;



INSERT INTO public."Usuario" ("Nombre", "Email", "Direccion", "TelefonoContacto", "IdRedSocial", "IdUsuarioRedSocial")
SELECT 'Tomas Dortona', 'tdortona@gmail.com', 'Palacios 374', '1137809082', 1, 'id1'
WHERE
    NOT EXISTS (
        SELECT "Email" FROM public."Usuario" WHERE "Email" = 'tdortona@gmail.com'
    );

INSERT INTO public."Usuario" ("Nombre", "Email", "Direccion", "TelefonoContacto", "IdRedSocial", "IdUsuarioRedSocial")
SELECT 'Rocio Bareiro', 'bareiro.rsb@gmail.com', '', '1155611126', '1', 'id2'
WHERE
    NOT EXISTS (
        SELECT "Email" FROM public."Usuario" WHERE "Email" = 'tdortona@gmail.com'
    );

INSERT INTO public."Usuario" ("Nombre", "Email", "Direccion", "TelefonoContacto", "IdRedSocial", "IdUsuarioRedSocial")
SELECT 'Matias Martinez', 'martinezmsms@gmail.com', 'Maipu 3835', '1150560969', '2', 'id3'
WHERE
    NOT EXISTS (
        SELECT "Email" FROM public."Usuario" WHERE "Email" = 'tdortona@gmail.com'
    );

INSERT INTO public."Usuario" ("Nombre", "Email", "Direccion", "TelefonoContacto", "IdRedSocial", "IdUsuarioRedSocial")
SELECT 'Jorge Velazquez', 'j.velazquez1985@gmail.com', '', '1168744236', 2, 'id4'
WHERE
    NOT EXISTS (
        SELECT "Email" FROM public."Usuario" WHERE "Email" = 'j.velazquez1985@gmail.com'
    );