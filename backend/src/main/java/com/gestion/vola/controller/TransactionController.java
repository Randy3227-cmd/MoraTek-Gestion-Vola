package com.gestion.vola.controller;

import com.gestion.vola.model.Transaction;
import com.gestion.vola.service.TransactionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    // ==================== CREATE ====================
    @PostMapping
    public ResponseEntity<Transaction> createTransaction(@RequestBody Transaction transaction) {

        if (transaction.getTransactionsType() == null) {
            throw new IllegalArgumentException("Transaction type cannot be null");
        }
        if (transaction.getAmount() == null || transaction.getAmount().signum() <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }

        Transaction created = transactionService.createTransaction(transaction);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }


    // ==================== GET BY ID ====================
    @GetMapping("/{id}")
    public ResponseEntity<Transaction> getTransactionById(
            @PathVariable Long id
    ) {
        Transaction transaction = transactionService.getTransactionById(id);
        return ResponseEntity.ok(transaction);
    }

    // ==================== GET ALL ====================
    @GetMapping
    public ResponseEntity<Object> getAllTransactions() {
        return ResponseEntity.ok(transactionService.getAllTransactions());
    }

    // ==================== VALIDATE ====================
    @PostMapping("/{id}/validate")
    public ResponseEntity<Transaction> validateTransaction(
            @PathVariable Long id
    ) {
        Transaction validated = transactionService.validateTransaction(id);
        return ResponseEntity.ok(validated);
    }

    // ==================== CANCEL ====================
    @PostMapping("/{id}/cancel")
    public ResponseEntity<Transaction> cancelTransaction(
            @PathVariable Long id
    ) {
        Transaction cancelled = transactionService.cancelTransaction(id);
        return ResponseEntity.ok(cancelled);
    }
}
