package com.gestion.vola.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.gestion.vola.model.User;
import com.gestion.vola.repository.UserRepository;

@Controller
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public String getAllUsers(Model model){
        List<User> users = userRepository.findAll();
        model.addAttribute("users", users);
        return "users/list";
    }

    @GetMapping("/create")
    public String showCreatorForm(User user){
        return "users/create";
    }

    @PostMapping
    public String createUser(User user){
        userRepository.save(user);
        return "redirect:/users";
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable("id") Long id, Model model){
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid user Id:" + id));
        model.addAttribute("user", user);
        return "users/edit";
    }
}
