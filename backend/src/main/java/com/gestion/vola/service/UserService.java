package com.gestion.vola.service;

import org.springframework.stereotype.Service;

import com.gestion.vola.model.User;
import com.gestion.vola.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public User getByUserName(String userName){
        return userRepository.findByUserName(userName);
    }

    public User createUser(User user){
        return userRepository.save(user);
    } 

}
