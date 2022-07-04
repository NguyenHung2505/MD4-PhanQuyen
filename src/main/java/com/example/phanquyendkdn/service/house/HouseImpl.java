package com.example.phanquyendkdn.service.house;

import com.example.phanquyendkdn.model.House;
import com.example.phanquyendkdn.service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.phanquyendkdn.repository.HouseRepositoty;

import java.util.List;
import java.util.Optional;

@Service
public class HouseImpl implements HouseService {
    @Autowired
    HouseRepositoty houseRepositoty;


    @Override
    public List<House> findAll() {
        return houseRepositoty.findAll();
    }

    @Override
    public Optional<House> findById(Long id) {
        return houseRepositoty.findById(id);
    }

    @Override
    public void save(House house) {
        houseRepositoty.save(house);
    }

    @Override
    public void remove(Long id) {
        houseRepositoty.deleteById(id);
    }

    @Override
    public Iterable<House> findAllByNameContaining(String name) {
        return houseRepositoty.findAllByNameContaining(name);
    }
}
