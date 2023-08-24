package com.dac.project.Repository;

import org.springframework.data.repository.CrudRepository;

import com.dac.project.model.BatchRegistration;

public interface BatchRegisterRepo extends CrudRepository<BatchRegistration,Long> {

}
