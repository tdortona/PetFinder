USE [PetFinderDB]
GO

IF NOT EXISTS(SELECT 1 FROM sys.columns 
          WHERE Name = N'IdUsuario'
          AND Object_ID = Object_ID(N'dbo.ImagenMascota'))
BEGIN
	ALTER TABLE [dbo].[ImagenMascota]
	ADD IdUsuario INT NOT NULL
END

ALTER TABLE [dbo].[ImagenMascota] WITH CHECK ADD CONSTRAINT FK_ImagenMascota_Usuario FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])