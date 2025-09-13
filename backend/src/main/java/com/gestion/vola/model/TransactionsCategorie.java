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

    public Long getIdTransactionsCategorie() {
        return idTransactionsCategorie;
    }

    public void setIdTransactionsCategorie(Long idTransactionsCategorie) {
        this.idTransactionsCategorie = idTransactionsCategorie;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
