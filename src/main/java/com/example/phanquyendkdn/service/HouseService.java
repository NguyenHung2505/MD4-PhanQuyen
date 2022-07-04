package com.example.phanquyendkdn.service;


import com.example.phanquyendkdn.model.House;

public interface HouseService extends GeneraService<House>{
    Iterable<House> findAllByNameContaining(String name);
}
