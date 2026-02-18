package com.user.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.entity.User;
import com.user.repository.Userrepository;

@Service
public class Userservice {
    @Autowired
    private Userrepository userrepository;
    public List getAllUsers() {
        return userrepository.findAll();
    }
    public Optional getUserById(Long id) {
        return userrepository.findById(id);
    }
    public void saveUser(User user) {
        userrepository.save(user);
    }
    public void deleteUser(Long id) {
        userrepository.deleteById(id);
    }
    public void updateUser(Long id, User user) {
        User updatedUser = userrepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        updatedUser.setName(user.getName());
        updatedUser.setEmail(user.getEmail());
        updatedUser.setPhonenumber(user.getPhonenumber());
        userrepository.save(updatedUser);
    }

}
    

