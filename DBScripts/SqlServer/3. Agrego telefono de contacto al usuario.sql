IF NOT EXISTS(SELECT 1 FROM sys.columns 
          WHERE Name = N'TelefonoContacto'
          AND Object_ID = Object_ID(N'dbo.Usuario'))
BEGIN
	ALTER TABLE [dbo].[Usuario]
	ADD TelefonoContacto VARCHAR(25) NOT NULL
END