package com.dac.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dac.project.Repository.FarmerProblemRepo;
import com.dac.project.model.FarmerProblems;

@Service
public class FarmerProblemServImpl implements FarmerProblemService {

	@Autowired
	FarmerProblemRepo farmerProblemRepo;
	
	@Override
	public void saveproblem(FarmerProblems farmerProblems) {
		
		   farmerProblemRepo.save(farmerProblems);
	}

}
