CREATE DATABASE storage;

USE storage;


CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    registro VARCHAR(20) UNIQUE NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE publicaciones (
    id_publicacion INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    tipo ENUM('curso', 'catedrático') NOT NULL,
    referencia VARCHAR(255) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);


CREATE TABLE cursos (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    nombre_curso VARCHAR(100) NOT NULL,
    nombre_profesor VARCHAR(50) NOT NULL,
    apellido_profesor VARCHAR(50) NOT NULL
);


--- cargar los valores y luego pasarselos a mi tabla


insert into cursos (nombre_curso, nombre_profesor, apellido_profesor)
    select `Nombre de Curso`, Nombres, Apellidos
    FROM profesores_y_cursos_2025_Hoja1
WHERE `Nombre de Curso` IS NOT NULL
AND Nombres IS NOT NULL
AND Apellidos IS NOT NULL;
;