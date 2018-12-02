INSERT INTO public."Raza"(
	"Descripcion")
	VALUES ('Encontrado');
	
INSERT INTO public."Raza"(
	"Descripcion")
	VALUES ('Mestizo');

INSERT INTO public."Mascota"(
	"IdMascota", "IdUsuario", "IdRaza", "Nombre", "Perdida")
	VALUES (0, ?, 1, 'Encontrado', false);
	
INSERT INTO public."Mascota"(
	"IdUsuario", "IdRaza", "Nombre", "Perdida")
	VALUES (?, 2, 'Martes', false);