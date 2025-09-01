package com.gestion.vola.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// ==================== TRANSACTIONS_TYPE ====================
@Entity
@Table(name = "TRANSACTIONS_TYPE")
public class TransactionsType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTransactionsType;

    private String description;

    // Getters & Setters...
}
