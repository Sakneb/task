const company = {
  Person: [
    {
      FirstName: "James",
      LastName: "Smith",
      DOB: "12-08-1990",
      Country: "Singapore",
      IDType: "Passport",
      widoId: "4578",
    },
    {
      FirstName: "Anna",
      LastName: "Johnson",
      DOB: "29-02-1967",
      Country: "Singapore",
      IDType: "Singapore Pass",
      widoId: "0956",
    },
    {
      FirstName: "Richard",
      LastName: "Jameson",
      DOB: "09-12-1978",
      Country: "Japan",
      IDType: "Work Permit",
      widoId: "5290",
    },
    {
      FirstName: "Emma",
      LastName: "Semuels",
      DOB: "05-01-1988",
      Country: "USA",
      IDType: "Passport",
      widoId: "1143",
    },
  ],
  Officers: [
    {
      Person: "4578",
      Role: "Shareholder",
      StartDate: "13-08-2010",
      widoId: "2806",
    },
    {
      Person: "1143",
      Role: "Shareholder",
      StartDate: "25-05-2015",
      widoId: "4530",
    },
    {
      Person: "5290",
      Role: "Director",
      StartDate: "31-10-2018",
      widoId: "8657",
    },
    {
      Person: "5290",
      Role: "Secretary",
      StartDate: "17-07-2012",
      widoId: "0012",
    },
  ],
  ShareholdingDetail: [
    {
      Person: "4578",
      CertificateNumber: "1",
      AcquisitionDate: "06-02-2017",
      ShareClass: "Ordinary",
      ShareCurrency: "US Dollar",
      ShareQty: "100",
      widoId: "2632",
    },
    {
      Person: "4578",
      CertificateNumber: "2",
      AcquisitionDate: "10-09-2017",
      ShareClass: "Ordinary",
      ShareCurrency: "US Dollar",
      ShareQty: "400",
      widoId: "9235",
    },
    {
      Person: "4578",
      CertificateNumber: "3",
      AcquisitionDate: "19-06-2018",
      ShareClass: "Preferred",
      ShareCurrency: "Singapore Dollar",
      ShareQty: "250",
      widoId: "2948",
    },
    {
      Person: "1143",
      CertificateNumber: "4",
      AcquisitionDate: "05-09-2019",
      ShareClass: "Ordinary",
      ShareCurrency: "Euro",
      ShareQty: "150",
      widoId: "1212",
    },
  ],
  ShareholdingSummary: [
    {
      Person: "4578",
      ShareClass: "Ordinary",
      ShareCurrency: "US Dollar",
      ShareQty: "500",
      widoId: "9822",
    },
    {
      Person: "4578",
      ShareClass: "Preferred",
      ShareCurrency: "Singapore Dollar",
      ShareQty: "250",
      widoId: "2343",
    },
    {
      Person: "1143",
      ShareClass: "Ordinary",
      ShareCurrency: "Euro",
      ShareQty: "150",
      widoId: "9678",
    },
  ],
};

const richard = company.Person.find(
  (person) => person.FirstName === "Richard" && person.LastName === "Jameson"
);

const emma = company.ShareholdingDetail.find(
  (person) => person.Person === "1143"
);

function updatePerson(person) {
  return (person.ShareQty = (parseInt(person.ShareQty) - 50).toString());
}

function formattedDate(date = new Date()) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}-${month}-${year}`;
}

const newCertificate = {
  Person: richard.widoId,
  CertificateNumber: "5",
  AcquisitionDate: formattedDate(),
  ShareClass: "Ordinary",
  ShareCurrency: "Euro",
  ShareQty: "50",
  widoId: (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000).toString(),
};

function createCertificate(certificate, person = null) {
  company.ShareholdingDetail.push(certificate);
  updatePerson(person);
}

createCertificate(newCertificate, emma);

console.log(company.ShareholdingDetail);
