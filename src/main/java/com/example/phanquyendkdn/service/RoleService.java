package com.example.phanquyendkdn.service;



import com.example.phanquyendkdn.model.Role;


public interface RoleService {
    Iterable<Role> findAll();


    void save(Role role);

    Role findByName(String name);
}
