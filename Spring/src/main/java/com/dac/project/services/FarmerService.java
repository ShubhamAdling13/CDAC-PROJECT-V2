package com.dac.project.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.dac.project.model.Farmer;

public interface FarmerService {
 
	public void savefarmdata(Farmer farmer);

	public Farmer getdetails(String fid);

	public List<Farmer> getFarmerList();

	public String uploadimg(MultipartFile file);

	public String uploadprob(MultipartFile file);


}
