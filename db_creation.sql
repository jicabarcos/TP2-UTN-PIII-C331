create database TP2_ProgIII_Cabarcos;

use TP2_ProgIII_Cabarcos;

CREATE TABLE Peliculas (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50),
    CreatedAt datetime,
    UpdatedAt datetime,
    Genre VARCHAR(20),
    Score float,
    DirectorId INT,
    Status BIT
);

CREATE TABLE Directores (
	Id INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    CreatedAt datetime,
    UpdatedAt datetime
);

ALTER TABLE Peliculas ADD CONSTRAINT FK_Peliculas_Directores FOREIGN KEY (DirectorId) REFERENCES Directores(Id);