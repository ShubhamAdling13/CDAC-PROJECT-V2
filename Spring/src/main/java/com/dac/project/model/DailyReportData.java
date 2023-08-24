package com.dac.project.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class DailyReportData {
    private String companyID ;
    private String farmerId ;
    private Long  batchId;
    
    @Id
    @GeneratedValue
    private Long srNo ;
   
     private int day;
    private Boolean status;
    private LocalDate date ;
    private int mort ;
    private long feedIntake ;
    private  long bodyWieght ;
	public DailyReportData() {
		super();
	}
	public DailyReportData(String companyID, String farmerId, Long batchId, int day, Boolean status, LocalDate date,
			int mort, long feedIntake, long bodyWieght) {
		super();
		this.companyID = companyID;
		this.farmerId = farmerId;
		this.batchId = batchId;
		this.day = day;
		this.status = status;
		this.date = date;
		this.mort = mort;
		this.feedIntake = feedIntake;
		this.bodyWieght = bodyWieght;
	}
	public String getCompanyID() {
		return companyID;
	}
	public void setCompanyID(String companyID) {
		this.companyID = companyID;
	}
	public String getFarmerId() {
		return farmerId;
	}
	public void setFarmerId(String farmerId) {
		this.farmerId = farmerId;
	}
	public Long getBatchId() {
		return batchId;
	}
	public void setBatchId(Long batchId) {
		this.batchId = batchId;
	}
	public int getDay() {
		return day;
	}
	public void setDay(int day) {
		this.day = day;
	}
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public int getMort() {
		return mort;
	}
	public void setMort(int mort) {
		this.mort = mort;
	}
	public long getFeedIntake() {
		return feedIntake;
	}
	public void setFeedIntake(long feedIntake) {
		this.feedIntake = feedIntake;
	}
	public long getBodyWieght() {
		return bodyWieght;
	}
	public void setBodyWieght(long bodyWieght) {
		this.bodyWieght = bodyWieght;
	}
    
    
}
