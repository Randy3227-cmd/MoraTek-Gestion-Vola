package com.gestion.vola.model;

import jakarta.persistence.*;
import java.util.List;

// ==================== USERS ====================
@Entity
@Table(name = "USERS")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;

    private String fullName;
    private String userName;
    private String email;
    private String phoneNumber;
    private String adress;
    @Lob
    private String image;

    // Relation avec Account
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Account> accounts;

    // Relation avec Contact (contacts que cet utilisateur a ajoutés)
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Contact> contacts;

    // Getters & Setters...
}