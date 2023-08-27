package com.dac.project.Repository;

import org.springframework.data.repository.CrudRepository;

import com.dac.project.model.FarmerProblems;

public interface FarmerProblemRepo extends CrudRepository<FarmerProblems, Long> {

}
