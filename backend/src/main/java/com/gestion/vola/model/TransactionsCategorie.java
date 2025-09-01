package com.gestion.vola.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// ==================== TRANSACTIONS_CATEGORIE ====================
@Entity
@Table(name = "TRANSACTIONS_CATEGORIE")
public class TransactionsCategorie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTransactionsCategorie;

    private String description;

    // Getters & Setters...
}
