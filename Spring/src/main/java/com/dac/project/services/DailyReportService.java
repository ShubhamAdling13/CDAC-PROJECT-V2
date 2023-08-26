package com.dac.project.services;

import java.util.List;

import com.dac.project.model.DailyReportData;


public interface DailyReportService {

	public void savedailyreportfarmer(DailyReportData dailyReportData);

	

	public List<DailyReportData> getDailyReportByBid(String bid);

}
