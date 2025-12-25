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
@Table(name = "transaction")
public class Transaction extends Categorie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

    @ManyToOne
    @JoinColumn(name = "id_statut_transaction")
    private StatutTransaction statutTransaction;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public StatutTransaction getStatutTransaction() {
        return statutTransaction;
    }

    public void setStatutTransaction(StatutTransaction statutTransaction) {
        this.statutTransaction = statutTransaction;
    }

}
