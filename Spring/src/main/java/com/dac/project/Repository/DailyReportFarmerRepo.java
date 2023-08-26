package com.dac.project.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.dac.project.model.DailyReportData;

public interface DailyReportFarmerRepo extends CrudRepository<DailyReportData, Long> {

	
	@Query("SELECT drd FROM DailyReportData drd WHERE drd.batchId = :bid")
  public  List<DailyReportData> findlistbyid(String bid);
}
