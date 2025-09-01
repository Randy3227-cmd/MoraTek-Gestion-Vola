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
@Table(name = "PRET")
public class Pret {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPret;
    
    private String adressed;
    private BigDecimal amount;
    private LocalDateTime dateEmprunt;
    private LocalDateTime dateRetourPrevue;

    @ManyToOne
    @JoinColumn(name = "id_statut_pret")
    private StatutPret statutPret;
    
    @ManyToOne
    @JoinColumn(name = "id_contact")
    private Contact contact;

    // Getters & Setters...
    
        public Long getIdPret() {
            return idPret;
        }
    
        public void setIdPret(Long idPret) {
            this.idPret = idPret;
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
}