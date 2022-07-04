package com.example.phanquyendkdn.repository;


import com.example.phanquyendkdn.model.House;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HouseRepositoty extends JpaRepository<House, Long> {
    Iterable<House> findAllByNameContaining(String name);
}
