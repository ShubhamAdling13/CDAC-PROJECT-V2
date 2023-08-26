package com.dac.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dac.project.Repository.DailyReportFarmerRepo;
import com.dac.project.model.DailyReportData;

@Service
public class DailyReportServiceImpl implements DailyReportService {
	
	@Autowired
	DailyReportFarmerRepo dailyReportFarmerRepo;

	@Override
	public void savedailyreportfarmer(DailyReportData dailyReportData) {
		     
		      dailyReportFarmerRepo.save(dailyReportData);
	}

//	@Override
//	public List<DailyReportData> getdailyrpot(String bid) {
//		
//	}

	@Override
	public List<DailyReportData> getDailyReportByBid(String bid) {
		List<DailyReportData> datta = (List<DailyReportData>)dailyReportFarmerRepo.findlistbyid(bid);
		return datta;
	 
	}

	

}
