package com.gestion.vola.service;

import java.util.List;

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

    public Account fnd

}
