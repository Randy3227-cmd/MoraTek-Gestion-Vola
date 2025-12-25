package com.gestion.vola.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.gestion.vola.model.Account;
import com.gestion.vola.model.User;
import com.gestion.vola.repository.AccountRepository;
import com.gestion.vola.repository.UserRepository;

@Service
public class AccountService {
    private final AccountRepository accountRepository;
    private final UserRepository userRepository;

    public AccountService(AccountRepository accountRepository, UserRepository userRepository ){
        this.accountRepository = accountRepository;
        this.userRepository = userRepository;
    }
 
    // create
    public Account createAccount(Long userId, Account account) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        account.setUser(user);
        return accountRepository.save(account);
    }

    //select * from account
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    // read by id
    public Optional<Account> getAccountById(Long id) {
        return accountRepository.findById(id);
    }

    // read by user
    public List<Account> getAccountsByUser(Long idUser) {
        return accountRepository.findByUserIdUser(idUser);
    }

    //update
    public Account updateAccount(Long id, Account newAccount) {
        Account account = accountRepository.findById(id).orElse(null);
        account.setAccountNumber(newAccount.getAccountNumber());
        account.setPassword(newAccount.getPassword());
        account.setAmount(newAccount.getAmount());
        return accountRepository.save(account);
    }

    //delete
    public void deleteAccount(Long id) {
        accountRepository.deleteById(id);
    }

    public Account updateAccountAmount(Long accountId, Double amount) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found"));
        account.setAmount(account.getAmount().add(java.math.BigDecimal.valueOf(amount)));
        return accountRepository.save(account);
    }


}
