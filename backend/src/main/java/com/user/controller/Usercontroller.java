package com.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.user.entity.User;
import com.user.service.Userservice;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class Usercontroller {
    @Autowired
    private Userservice userservice;
    @GetMapping
    public Object getAllUsers() {
        return userservice.getAllUsers();
    }
    @PostMapping
    public void createUser(@RequestBody User user) {
        userservice.saveUser(user);
    }
    @GetMapping("/{id}")
    public Object getUserById(@PathVariable Long id) {
        return userservice.getUserById(id); 
    }
    @PutMapping("/{id}")
    public void updateUser(@PathVariable Long id, @RequestBody User user) {
        userservice.updateUser(id, user);   
    }
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userservice.deleteUser(id); 
    }

}
