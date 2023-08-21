package com.dac.project.services;

import java.util.List;

import com.dac.project.model.Farmer;

public interface FarmerService {
 
	public void savefarmdata(Farmer farmer);

	public Farmer getdetails(String fid);

	public List<Farmer> getFarmerList();
}
