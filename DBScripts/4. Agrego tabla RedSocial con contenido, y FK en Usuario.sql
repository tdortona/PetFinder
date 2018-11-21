IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'RedSocial')
BEGIN
	CREATE TABLE [dbo].[RedSocial]
	(
		IdRedSocial INT IDENTITY(1,1) NOT NULL,
		Nombre VARCHAR(MAX) NOT NULL,
		CONSTRAINT PK_RedSocial PRIMARY KEY (IdRedSocial)
	)
END
GO

INSERT INTO [dbo].[RedSocial] (Nombre) VALUES ('facebook');
INSERT INTO [dbo].[RedSocial] (Nombre) VALUES ('google');

ALTER TABLE [dbo].[Usuario] ADD IdRedSocial INT NOT NULL
CONSTRAINT FK_Usuario_RedSocial FOREIGN KEY ([IdUsuario]) REFERENCES [dbo].[Usuario] ([IdUsuario]);

ALTER TABLE [dbo].[Usuario] ADD IdUsuarioRedSocial VARCHAR(MAX) NOT NULL;
