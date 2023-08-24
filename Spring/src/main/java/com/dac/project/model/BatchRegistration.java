package com.dac.project.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BatchRegistration {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
   private long batchId ;
   private LocalDate startDate;
   private long  totalBirds ;
   private long farmerId;
   private String companyId ;
   private Boolean batchStatus;
public BatchRegistration() {
	super();
}
public BatchRegistration(long batchId, LocalDate startDate, long totalBirds, long farmerId, String companyId,
		Boolean batchStatus) {
	super();
	this.batchId = batchId;
	this.startDate = startDate;
	this.totalBirds = totalBirds;
	this.farmerId = farmerId;
	this.companyId = companyId;
	this.batchStatus = batchStatus;
}
public long getBatchId() {
	return batchId;
}
public void setBatchId(long batchId) {
	this.batchId = batchId;
}
public LocalDate getStartDate() {
	return startDate;
}
public void setStartDate(LocalDate startDate) {
	this.startDate = startDate;
}
public long getTotalBirds() {
	return totalBirds;
}
public void setTotalBirds(long totalBirds) {
	this.totalBirds = totalBirds;
}
public long getFarmerId() {
	return farmerId;
}
public void setFarmerId(long farmerId) {
	this.farmerId = farmerId;
}
public String getCompanyId() {
	return companyId;
}
public void setCompanyId(String companyId) {
	this.companyId = companyId;
}
public Boolean getBatchStatus() {
	return batchStatus;
}
public void setBatchStatus(Boolean batchStatus) {
	this.batchStatus = batchStatus;
}

   
   
   
   
   
   
}
