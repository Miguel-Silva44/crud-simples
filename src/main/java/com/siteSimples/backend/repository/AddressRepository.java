package com.siteSimples.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.siteSimples.backend.model.Address;

@Repository
public interface AddressRepository  extends JpaRepository<Address, Long>{

}
