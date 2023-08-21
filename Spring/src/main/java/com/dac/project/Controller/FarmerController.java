package com.dac.project.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.dac.project.model.Farmer;
import com.dac.project.services.FarmerService;

@RestController
@CrossOrigin
public class FarmerController {
	  
	@Autowired
	 FarmerService farmerService;
	
	  
	 



	@PostMapping("/FarmerRegistration")
	@ResponseBody
	public String savefarmerdata(@RequestBody Farmer farmer)
	{
	         this.farmerService.savefarmdata(farmer);
	         System.out.println(farmer);
	         return "farmer added";

	}
	
	@GetMapping("/Getfarm/{id}")
	public Farmer getfarmer(@PathVariable ("id") String fid)
	{
		return farmerService.getdetails(fid);
	}
	
	@GetMapping("/FarmerList")
	public List<Farmer> getAllFarmer()
	{
		return farmerService.getFarmerList();
	}
	
	
}
