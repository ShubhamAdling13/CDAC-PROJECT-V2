package com.dac.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dac.project.Repository.FarmerRepo;

import com.dac.project.model.Farmer;


@Service
public class FarmerServiceImpl implements FarmerService {

	@Autowired
	FarmerRepo farmerRepo ;
	

	@Override
	public void savefarmdata(Farmer farmer) {
	    	 farmerRepo.save(farmer);
	  
	}

    @Override
	public Farmer getdetails(String fid) {
	
			 Farmer gtdata = farmerRepo.findById(fid).get();
			return gtdata;
	
	}

	@Override
	public List<Farmer> getFarmerList() {
		 List<Farmer> lst = (List<Farmer> ) farmerRepo.findAll();
		return lst;
	}

	


	
	

}
