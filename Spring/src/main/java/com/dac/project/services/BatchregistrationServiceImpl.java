package com.dac.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dac.project.Repository.BatchRegisterRepo;
import com.dac.project.model.BatchRegistration;

@Service
public class BatchregistrationServiceImpl implements BatchRegistrationService {
    @Autowired
	BatchRegisterRepo batchRegisterRepo;
	
	
	@Override
	public void saveBatch(BatchRegistration batchRegistration) {
	              batchRegisterRepo.save(batchRegistration);
		
	}

}
