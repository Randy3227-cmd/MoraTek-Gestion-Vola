CREATE TABLE USERS(
    id_user serial primary key,
    full_name VARCHAR(100),
    user_name VARCHAR(100)
    email VARCHAR(100),
    phone_number VARCHAR(100),
    adress VARCHAR(100),
    image TEXT
);

CREATE TABLE ACCOUNT(
    id_account serial primary key,
    id_user int references id_users(USERS),
    account_number VARCHAR(100),
    account_abonment_date TIMESTAMP,
    password TEXT,
    amount NUMERIC(15,2)
);

CREATE TABLE CONTACT(
    id_contact serial primary key,
    id_users int references id_user(USERS),
    id_users_contact int references id_user(USERS)
);

CREATE TABLE TRANSACTIONS_TYPE(
    id_transactions_type serial primary key,
    description TEXT
);
-- income, expense

CREATE TABLE TRANSACTIONS_CATEGORIE(
    id_transactions_categorie serial primary key,
    description TEXT
);
-- salaire, vente, parents, pret

CREATE TABLE TRANSACTIONS(
    id_transactions serial primary key,
    id_account int references id_account(ACCOUNT),
    amount NUMERIC(15, 2),
    transactions_date TIMESTAMP,
    transactions_type int references id_transactions_type(TRANSACTIONS_TYPE),
    description TEXT --facultatif
);

CREATE TABLE STATUT_PRET(
    id_statut_pret serial primary key,
    description TEXT
);

--utilisation d'un table pret, si la transactions_categorie est un pret
CREATE TABLE PRET(
    id_pret serial primary key,
    adressed VARCHAR(255), -- hoe iza le olona adressé
    amount NUMERIC(15, 2),
    date_emprunt TIMESTAMP,
    date_retour_prevue TIMESTAMP,
    id_statut_pret int references id_statut_pret(STATUT_PRET),
    id_contact int references id_contact(CONTACT)
);