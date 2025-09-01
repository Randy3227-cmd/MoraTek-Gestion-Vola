package com.gestion.vola.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

// ==================== TRANSACTIONS ====================
@Entity
@Table(name = "TRANSACTIONS")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTransactions;

    @ManyToOne
    @JoinColumn(name = "id_account")
    private Account account;

    private BigDecimal amount;
    private LocalDateTime transactionsDate;

    @ManyToOne
    @JoinColumn(name = "transactions_type")
    private TransactionsType transactionsType;

    @ManyToOne
    @JoinColumn(name = "id_transactions_categorie")
    private TransactionsCategorie categorie;

    private String description;

    // Getters & Setters...
}
