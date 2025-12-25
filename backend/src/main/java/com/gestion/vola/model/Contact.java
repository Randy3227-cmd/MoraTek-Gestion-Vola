package com.gestion.vola.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


// ==================== CONTACT ====================
@Entity
@Table(name = "CONTACT")
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "id_users")
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "id_users_contact")
    private User contactUser;

    @OneToMany(mappedBy = "contact", cascade = CascadeType.ALL)
    private List<Pret> prets;

    
    // Getters & Setters...
    public Long getId() {
        return id;
        }

        public void setId(Long id) {
            this.id = id;
        }
        
        public User getUser() {
            return user;
        }
        
        public void setUser(User user) {
            this.user = user;
        }
        public User getContactUser() {
            return contactUser;
        }
        
        public void setContactUser(User contactUser) {
            this.contactUser = contactUser;
        }
        
        public List<Pret> getPrets() {
            return prets;
        }
        
        public void setPrets(List<Pret> prets) {
            this.prets = prets;
        }
    }
    