package com.dac.project.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dac.project.model.BatchRegistration;
import com.dac.project.model.CloseBatch;
import com.dac.project.model.DailyReportData;
import com.dac.project.model.Farmer;
import com.dac.project.model.Fetchbatch;

import com.dac.project.services.BatchRegistrationService;
import com.dac.project.services.DailyReportService;
import com.dac.project.services.FarmerService;

@RestController
@CrossOrigin
public class FarmerController {
	  
	@Autowired
	 FarmerService farmerService;
	
	@Autowired
	DailyReportService dailyReportService;
	
	@Autowired
	BatchRegistrationService batchRegistrationService;
	  
	 


	@PostMapping("/FarmerRegistration")
	@ResponseBody
	public String savefarmerdata(@RequestBody Farmer farmer)
	{
	         farmerService.savefarmdata(farmer);
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
	
	
	@PostMapping("/getbatchdetail")
	public BatchRegistration getbatchdetail(@RequestBody Fetchbatch fetchbatch)
	{      
		System.out.println(fetchbatch);
		BatchRegistration res = batchRegistrationService.getbatchdetai(fetchbatch.getFarmid());
		System.out.println(res);
		return res;
	}
	
	@PutMapping("/closebatch")
	public String closebatch(@RequestBody  CloseBatch clbatch)
	{
		System.out.println(clbatch);
	
		batchRegistrationService.closebatchh(clbatch);
		
		return "batch closed successfully";
		
	}
	
	@PostMapping("/dailyreportfarmer")
	public String savedailyreport (@RequestBody DailyReportData dailyReportData)
	{
		dailyReportService.savedailyreportfarmer(dailyReportData);
		return "daily rport data added successfully";
	}
	
	
	
	
	
}
