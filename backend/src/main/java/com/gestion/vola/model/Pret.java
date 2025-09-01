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
}