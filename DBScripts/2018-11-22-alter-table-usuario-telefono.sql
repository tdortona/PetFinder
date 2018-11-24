do $$
    BEGIN
        BEGIN
            ALTER TABLE public."Usuario"
            ADD COLUMN "TelefonoContacto" character varying;
        EXCEPTION
            WHEN duplicate_column THEN RAISE NOTICE 'column TelefonoContacto already exist in table Usuario.';
        END;
    END;
$$;