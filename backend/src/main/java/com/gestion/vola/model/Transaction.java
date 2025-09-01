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

    public Long getIdTransactions() {
        return idTransactions;
    }

    public void setIdTransactions(Long idTransactions) {
        this.idTransactions = idTransactions;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public LocalDateTime getTransactionsDate() {
        return transactionsDate;
    }

    public void setTransactionsDate(LocalDateTime transactionsDate) {
        this.transactionsDate = transactionsDate;
    }

    public TransactionsType getTransactionsType() {
        return transactionsType;
    }

    public void setTransactionsType(TransactionsType transactionsType) {
        this.transactionsType = transactionsType;
    }

    public TransactionsCategorie getCategorie() {
        return categorie;
    }

    public void setCategorie(TransactionsCategorie categorie) {
        this.categorie = categorie;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
