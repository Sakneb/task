I created a JavaScript object called company, which stores information about people, officers, shareholding details, and shareholding summary of a company. 

The company object has four arrays:

- Person: contains information about the individuals associated with the company.

- Officers: contains information about the officers of the company.

- ShareholdingDetail: contains detailed information about the shareholding of each person associated with the company.

- ShareholdingSummary: summarizes the shareholding of each person associated with the company.


Then I wrote a code that finds a specific person named "Richard Jameson" and stores their information in the richard variable. It also finds the shareholding details of a specific person with a widoId of "1143" and stores it in the emma variable.
Next I defined two functions:

- updatePerson(person): updates the ShareQty property of a shareholding detail object by subtracting 50 from the current value.

- formattedDate(date = new Date()): formats a date object as a string in the format "DD-MM-YYYY". If no date object is provided, it uses the current date.

I wrote a new shareholding certificate for Richard Jameson with a CertificateNumber of "5", an AcquisitionDate of the current date, a ShareClass of "Ordinary", a ShareCurrency of "Euro", a ShareQty of "50", and a unique widoId generated using a random number. This new certificate is stored in the newCertificate variable.

Finally, the code calls the createCertificate() function with the newCertificate and emma objects as arguments, which adds the new certificate to the ShareholdingDetail array and updates Emma's share quantity.
