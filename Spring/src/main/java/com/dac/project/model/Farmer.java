package com.dac.project.model;





	import java.time.LocalDate;
import java.time.LocalDateTime;

	import jakarta.persistence.Entity;

import jakarta.persistence.Id;

	@Entity
	public class Farmer {
		
		private String farmName;
		private String gender;
		private LocalDateTime ldt;
		private LocalDate date ;
		private Long mobileNo;
		private String farmAddress;
		private String farmTaluka;
		private String farmDist;
		private String farmState;
		private Long pincode;
		private String compIdTemp;
	
		@Id
		private String farmerId;
		private String farmPass;
		
		public Farmer() {
			super();
		}

		public Farmer(String farmName, String gender, LocalDateTime ldt, LocalDate date, Long mobileNo,
				String farmAddress, String farmTaluka, String farmDist, String farmState, Long pincode,
				String compIdTemp, String farmerId, String farmPass) {
			super();
			this.farmName = farmName;
			this.gender = gender;
			this.ldt = ldt;
			this.date = date;
			this.mobileNo = mobileNo;
			this.farmAddress = farmAddress;
			this.farmTaluka = farmTaluka;
			this.farmDist = farmDist;
			this.farmState = farmState;
			this.pincode = pincode;
			this.compIdTemp = compIdTemp;
			this.farmerId = farmerId;
			this.farmPass = farmPass;
		}

		public String getFarmName() {
			return farmName;
		}

		public void setFarmName(String farmName) {
			this.farmName = farmName;
		}

		public String getGender() {
			return gender;
		}

		public void setGender(String gender) {
			this.gender = gender;
		}

		public LocalDateTime getLdt() {
			return ldt;
		}

		public void setLdt(LocalDateTime ldt) {
			this.ldt = ldt;
		}

		public LocalDate getDate() {
			return date;
		}

		public void setDate(LocalDate date) {
			this.date = date;
		}

		public Long getMobileNo() {
			return mobileNo;
		}

		public void setMobileNo(Long mobileNo) {
			this.mobileNo = mobileNo;
		}

		public String getFarmAddress() {
			return farmAddress;
		}

		public void setFarmAddress(String farmAddress) {
			this.farmAddress = farmAddress;
		}

		public String getFarmTaluka() {
			return farmTaluka;
		}

		public void setFarmTaluka(String farmTaluka) {
			this.farmTaluka = farmTaluka;
		}

		public String getFarmDist() {
			return farmDist;
		}

		public void setFarmDist(String farmDist) {
			this.farmDist = farmDist;
		}

		public String getFarmState() {
			return farmState;
		}

		public void setFarmState(String farmState) {
			this.farmState = farmState;
		}

		public Long getPincode() {
			return pincode;
		}

		public void setPincode(Long pincode) {
			this.pincode = pincode;
		}

		public String getCompIdTemp() {
			return compIdTemp;
		}

		public void setCompIdTemp(String compIdTemp) {
			this.compIdTemp = compIdTemp;
		}

		public String getFarmerId() {
			return farmerId;
		}

		public void setFarmerId(String farmerId) {
			this.farmerId = farmerId;
		}

		public String getFarmPass() {
			return farmPass;
		}

		public void setFarmPass(String farmPass) {
			this.farmPass = farmPass;
		}

		@Override
		public String toString() {
			return "Farmer [farmName=" + farmName + ", gender=" + gender + ", ldt=" + ldt + ", date=" + date
					+ ", mobileNo=" + mobileNo + ", farmAddress=" + farmAddress + ", farmTaluka=" + farmTaluka
					+ ", farmDist=" + farmDist + ", farmState=" + farmState + ", pincode=" + pincode + ", compIdTemp="
					+ compIdTemp + ", farmerId=" + farmerId + ", farmPass=" + farmPass + "]";
		}
		
	}
	