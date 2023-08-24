package com.dac.project.services;

import com.dac.project.model.BatchRegistration;

public interface BatchRegistrationService {
         public void saveBatch(BatchRegistration batchRegistration);

		public BatchRegistration getbatchdetai(String farmid);
}
