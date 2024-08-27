function autoFillGoogleFromForm(e) {
var timestamp = e.values[0];
var ClientName = e.values[1];
var Email = e.values[2];
var DOB = e.values[3];
var Password = e.values[4];
var Gender = e.values[5];
var Notes = e.values[6];
var AgreeToTerms = e.values[7];

var templateFile = DriveApp.getFilebyId("1AHs2M-JW48fEIl7Jxdzo_WR5gHtJkjfMAO6NLtxDiaI");
  var templateResponseFolder = DriveApp.getFolderbyId("1tcNdIIokC0qG8BhjPNj4xrL8r3Bzwl7l");

  var copy = templateFile.makeCopy(ClientName + ',' + Email, templateResponseFolder);
  var doc = DocumentApp.openById(copy.getId());

  var body = doc.getBody();
  body.replaceText("{{ClientName}}", ClientName);
  body.replaceText("{{Email}}", Email);
  body.replaceText("{{DOB}}", DOB);
  body.replaceText("{{Password}}", Password);
  body.replaceText("{{Gender}}", Gender);
  body.replaceText("{{Notes}}", Notes);
  body.replaceText("{{Agree To Terms}}", AgreeToTerms);

doc.saveAndClose();
}
