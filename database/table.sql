CREATE DATABASE mora_tek;

CREATE TABLE users (
    id_user SERIAL PRIMARY KEY,
    nom VARCHAR(20) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    mot_de_passe TEXT NOT NULL,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comptes (
    id_compte SERIAL PRIMARY KEY,
    id_user INT REFERENCES users(id_user),
    nom_compte VARCHAR(20) NOT NULL,
    solde_initiale NUMERIC(15,2) DEFAULT 0,
    devise VARCHAR(15) DEFAULT 'MGA',
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE categories (
    id_categorie SERIAL PRIMARY KEY,
      nom_categorie VARCHAR(20) NOT NULL,
    type_categorie VARCHAR(20) CHECK (type_categorie IN ('revenu', 'depense')),
    description TEXT
);
