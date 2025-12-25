package com.gestion.vola.service;

import com.gestion.vola.model.Transaction;
import com.gestion.vola.model.StatutTransaction;
import com.gestion.vola.repository.TransactionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;

    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public Transaction createTransaction(Transaction transaction) {

        if (transaction.getAmount() == null || transaction.getAmount().signum() <= 0) {
            throw new IllegalArgumentException("Amount cannot be null or less than or equal to zero");
        }

        if (transaction.getTransactionsDate() == null) {
            throw new IllegalArgumentException("Transaction date cannot be null");
        }

        if (transaction.getCategorie() == null) {
            throw new IllegalArgumentException("Transaction category cannot be null");
        }

        if (transaction.getTransactionsType() == null) {
            throw new IllegalArgumentException("Transaction type cannot be null");
        }

        if (transaction.getStatutTransaction() == null) {
            throw new IllegalArgumentException("Transaction status cannot be null");
        }

        return transactionRepository.save(transaction);
    }
    @Transactional
    public Transaction validateTransaction(Long transactionId) {

        Transaction transaction = transactionRepository.findById(transactionId)
                .orElseThrow(() ->
                        new IllegalArgumentException("Invalid transaction id : " + transactionId)
                );

        // Vérifier que la transaction est EN_ATTENTE
        if (transaction.getStatutTransaction().getId() != 1L) {
            throw new IllegalStateException(
                    "Only transactions with status EN_ATTENTE can be validated"
            );
        }

        // Mise à jour du solde du compte
        if (transaction.getAccount() == null) {
            throw new IllegalStateException("Transaction must be linked to an account");
        }

        if (transaction.getTransactionsType() == null) {
            throw new IllegalStateException("Transaction must have a type");
        }

        // DEBIT → solde augmente
        if (transaction.getTransactionsType().getId() == 1L) {
            transaction.getAccount().setAmount(
                    transaction.getAccount().getAmount().add(transaction.getAmount())
            );
        } 
        // CREDIT → solde diminue
        else if (transaction.getTransactionsType().getId() == 2L) {
            transaction.getAccount().setAmount(
                    transaction.getAccount().getAmount().subtract(transaction.getAmount())
            );
        } else {
            throw new IllegalArgumentException("Unknown transaction type id: " 
                                            + transaction.getTransactionsType().getId());
        }

        // Changer le statut à VALIDEE
        StatutTransaction validatedStatus = new StatutTransaction();
        validatedStatus.setId(2L); // VALIDEE
        transaction.setStatutTransaction(validatedStatus);

        return transactionRepository.save(transaction);
    }


    @Transactional
    public Transaction cancelTransaction(Long transactionId) {

        Transaction transaction = transactionRepository.findById(transactionId)
                .orElseThrow(() ->
                        new IllegalArgumentException("Invalid transaction id : " + transactionId)
                );

        if (transaction.getStatutTransaction().getId() != 1L) {
            throw new IllegalStateException(
                    "Only transactions with status EN_ATTENTE can be cancelled"
            );
        }

        StatutTransaction cancelledStatus = new StatutTransaction();
        cancelledStatus.setId(3L);

        transaction.setStatutTransaction(cancelledStatus);

        return transactionRepository.save(transaction);
    }
    @Transactional
    public Transaction cancelTransactionValidated(Long transactionId) {

        Transaction transaction = transactionRepository.findById(transactionId)
                .orElseThrow(() ->
                        new IllegalArgumentException("Invalid transaction id: " + transactionId)
                );

        // Vérifier que la transaction est VALIDEE
        if (transaction.getStatutTransaction().getId() != 2L) {
            throw new IllegalStateException(
                    "Only VALIDEE transactions can be cancelled with this method"
            );
        }

        // Vérifier que le compte est présent
        if (transaction.getAccount() == null) {
            throw new IllegalStateException("Transaction must be linked to an account");
        }

        // Vérifier que le type est présent
        if (transaction.getTransactionsType() == null) {
            throw new IllegalStateException("Transaction must have a type");
        }

        // Inverser l’effet sur le solde
        if (transaction.getTransactionsType().getId() == 1L) { // DEBIT
            // Annuler DEBIT → retirer le montant
            transaction.getAccount().setAmount(
                    transaction.getAccount().getAmount().subtract(transaction.getAmount())
            );
        } else if (transaction.getTransactionsType().getId() == 2L) { // CREDIT
            // Annuler CREDIT → ajouter le montant
            transaction.getAccount().setAmount(
                    transaction.getAccount().getAmount().add(transaction.getAmount())
            );
        } else {
            throw new IllegalArgumentException("Unknown transaction type id: " +
                                            transaction.getTransactionsType().getId());
        }

        // Passer le statut à ANNULEE
        StatutTransaction cancelledStatus = new StatutTransaction();
        cancelledStatus.setId(3L); // ANNULEE
        transaction.setStatutTransaction(cancelledStatus);

        return transactionRepository.save(transaction);
    }

    public Transaction getTransactionById(Long id) {
        return transactionRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Transaction not found with id: " + id));
        
    }

    public Object getAllTransactions() {
        return transactionRepository.findAll();
    }


}
