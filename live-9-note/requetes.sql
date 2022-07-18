-- SQLite

CREATE TABLE IF NOT EXISTS articles (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    titre TEXT NOT NULL ,
    dt_create DATETIME NOT NULL
);

-- https://sqlite.org/index.html

INSERT INTO articles 
(titre , dt_create)
VALUES 
("Article 1" , date("now")) , 
("Article 2" , date("now")) ,
("Article 3" , "2002-07-01 18:00") ;

-- contenu de la table 

SELECT * FROM articles ;

-- changer le titre de premier article 

UPDATE articles SET titre = "Article 1 modifié" WHERE id = 1 ;

-- supprimer l'article ayant l'id 2

DELETE FROM articles WHERE id = 2 ;


CREATE TABLE IF NOT EXISTS commentaires (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL ,
    article_id INTEGER NOT NULL ,
    FOREIGN KEY  (article_id) REFERENCES articles(id)
);

-- https://sqlite.org/foreignkeys.html

-- Heidi SQL => https://www.heidisql.com/


-- ECF = Examin en Cours de Formation
-- l'application ne va pouvoir être connecté à 100% sur internet 
-- permet de faire en sorte que ton application puisse fonctionner SANS  connexion 

-- API => Application Program Interface 
-- fetch() => appeler un site internet (service) => retourner les informations 


-- https://www.youtube.com/watch?v=Y7rbJRjaYCY
-- application en 3 pages 
-- page formulaire => ville 
-- liste date / date => prévision météo  

-- todolist / application de gestion budget 
-- jeu  vidéo => pendu 

