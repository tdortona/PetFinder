IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'ConsultasWatson')
BEGIN
	CREATE TABLE [dbo].[ConsultasWatson]
	(
		IdConsulta INT IDENTITY(1,1) NOT NULL, 
		Clase VARCHAR(25) NOT NULL,
		Resultado INT NOT NULL,
		IdImagen INT NOT NULL,
		CONSTRAINT PK_ConsultasWatson PRIMARY KEY (IdConsulta)
	)
END
GO

ALTER TABLE [dbo].[ConsultasWatson] ADD
CONSTRAINT FK_ImagenMascota_ConsultasWatson FOREIGN KEY ([IdImagen]) REFERENCES [dbo].[ImagenMascota] ([IdImagen]);

