package com.gestion.vola.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// ==================== STATUT_PRET ====================
@Entity
@Table(name = "STATUT_PRET")
public class StatutPret {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idStatutPret;

    private String description;

    public Long getIdStatutPret() {
        return idStatutPret;
    }

    public void setIdStatutPret(Long idStatutPret) {
        this.idStatutPret = idStatutPret;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}

