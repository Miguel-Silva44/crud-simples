package com.siteSimples.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.siteSimples.backend.model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long>{

}
