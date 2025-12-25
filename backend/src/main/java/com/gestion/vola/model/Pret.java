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

// ==================== PRET ====================
@Entity
@Table(name = "pret")
public class Pret {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String adressed;
    private BigDecimal amount;
    private LocalDateTime dateEmprunt;
    private LocalDateTime dateRetourPrevue;
    private LocalDateTime dateRetourEffective;
    private BigDecimal interestRate;

    @ManyToOne
    @JoinColumn(name = "id_statut_pret")
    private StatutPret statutPret;
    
    @ManyToOne
    @JoinColumn(name = "id_contact")
    private Contact contact;

    // Getters & Setters...
    
        public Long getId() {
            return id;
        }
    
        public void setId(Long id) {
            this.id = id;
        }

        public String getAdressed() {
            return adressed;
        }

        public void setAdressed(String adressed) {
            this.adressed = adressed;
        }

        public BigDecimal getAmount() {
            return amount;
        }

        public void setAmount(BigDecimal amount) {
            this.amount = amount;
        }

        public LocalDateTime getDateEmprunt() {
            return dateEmprunt;
        }

        public void setDateEmprunt(LocalDateTime dateEmprunt) {
            this.dateEmprunt = dateEmprunt;
        }

        public LocalDateTime getDateRetourPrevue() {
            return dateRetourPrevue;
        }

        public void setDateRetourPrevue(LocalDateTime dateRetourPrevue) {
            this.dateRetourPrevue = dateRetourPrevue;
        }

        public StatutPret getStatutPret() {
            return statutPret;
        }

        public void setStatutPret(StatutPret statutPret) {
            this.statutPret = statutPret;
        }

        public Contact getContact() {
            return contact;
        }

        public void setContact(Contact contact) {
            this.contact = contact;
        }

        public LocalDateTime getDateRetourEffective() {
            return dateRetourEffective;
        }

        public void setDateRetourEffective(LocalDateTime dateRetourEffective) {
            this.dateRetourEffective = dateRetourEffective;
        }

        public BigDecimal getInterestRate() {
            return interestRate;
        }

        public void setInterestRate(BigDecimal interestRate) {
            this.interestRate = interestRate;
        }
}