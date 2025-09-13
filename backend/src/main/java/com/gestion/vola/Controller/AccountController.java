package com.gestion.vola.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gestion.vola.model.Account;
import com.gestion.vola.repository.AccountRepository;

@Controller
@RequestMapping("/accounts")
public class AccountController {
    @Autowired
    private AccountRepository accountRepository;

    //lire all Accounts
    @GetMapping
    public String listAccounts(Model model){
        model.addAttribute("accounts", accountRepository.findAll());
        return "accounts"; //mitovy am accounts.jsp
    }

    //read account by id
    @GetMapping("/{id}")
    public String getAccountById(@PathVariable Long id, Model model) {
        Optional<Account> account = accountRepository.findById(id);
        if(account.isPresent()) {
            model.addAttribute("account", account.get());
            return "account-details"; // mitovy account-details.jsp
        } else {
            model.addAttribute("error",  "Compte non trouvé");
            return "accoutn-form"; 
        }
    }

    //formulaire manisy compte
    @GetMapping("/add")
    public String showFormAddAccount(Model model) {
        model.addAttribute("account", new Account());
        return "account-form";
    }

    //add compte
    @PostMapping("/add")
    public String addAccount(@ModelAttribute Account account) {
        accountRepository.save(account);
        return "redirect:/accounts";
    }

    // formulaire de modif
    @GetMapping("/edit/{id}")
    public String showFormedit(@PathVariable Long id, Model model) {
        Optional<Account> account = accountRepository.findById(id);
        if(account.isPresent()) {
            model.addAttribute("account", account.get());
            return "account-form";
        } else {
            model.addAttribute("error", "Compte non trouvé");
            return "error";
        }
    }

    // update compte
    @PostMapping("/update")
    public String updateAccount(@ModelAttribute Account account ) {
        accountRepository.save(account);
        return "redirect:/accounts";
    }

    //supprimer
    public String deleteAccount(@PathVariable Long id) {
        accountRepository.deleteById(id);
        return "redirect:/accounts";
    }

}