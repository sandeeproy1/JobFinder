var con = require('./dbconnection')
var mysql = require('mysql')

function connectDB() {
	var connection = mysql.createConnection(con.connectionString);

	connection.connect(function(err) {
		if (err) {
			throw err;
		}
	});
	return connection;
}

/** *****SANDEEP-END********* */
exports.getAllJobs = function(req, res) {
	// var email = req.body.username;
	// var pass = req.body.password;

	var connection = connectDB();
	var query = "SELECT jp.JobId, c.CompanyName, jc.JobCategoryDesc, jp.NoOfPositions, jp.JobTitle, jp.WorkLocation, wu.WorkUnitDesc, jp.MinQualRequirements, jp.PreferredSkills, jp.AdditionalInfo, jp.PostingDate FROM `jobposting` jp JOIN `jobcategory` jc ON jc.JobCategoryId = jp.JobCategoryId JOIN `company` c ON jp.CompanyId = c.CompanyId JOIN `workunit` wu ON jp.WorkUnitId = wu.WorkUnitId WHERE jp.JobCategoryId = 1";
	connection.query(query, function(err, rows, fields) {
		if (err)
			throw err;
		if (rows.length > 0) {
			res.send(JSON.stringify(rows));
		} else {
			res.send({
				error : "Not Found"
			});
		}
		connection.end();
	});
};

exports.applyJob = function(req, res) {
	var jobId = req.body.JobId;
	var userId = req.body.UserId;

	console.log('***Ratan: ' + userId +": " + jobId);

	var connection = connectDB();
	var query = "INSERT INTO `jobsapplied` VALUES (" + userId + "," + jobId
			+ ")";
	connection.query(query, function(err, rows, fields) {
	//	if (err)
	//		throw err;
		res.send("OK");
		connection.end();
	});
};

exports.createJob = function(req, res) {
	var CompanyId = req.body.CompanyId;
	var JobCategoryId = req.body.JobCategoryId;
	var NoOfPositions = req.body.NoOfPositions;
	var JobTitle = req.body.JobTitle;
	var WorkLocation = req.body.WorkLocation;
	var WorkUnitId = req.body.WorkUnitId;
	var JobDescription = req.body.JobDescription;
	var MinQualRequirements = req.body.MinQualRequirements;
	var PreferredSkills = req.body.PreferredSkills;
	var AdditionalInfo = req.body.AdditionalInfo;
	var PostingDate = req.body.PostingDate;
	var PostingUntil = req.body.PostingUntil;
	var Salary = req.body.Salary;
	var userId = req.body.UserId;

	if(CompanyId == undefined){
		CompanyId="NA"
	}

	if(JobCategoryId == undefined){
		JobCategoryId="NA"
	}
	if(NoOfPositions == undefined){
		NoOfPositions="NA"
	}
	if(JobTitle == undefined){
		JobTitle="NA"
	}
	if(WorkUnitId == undefined){
		WorkUnitId=1;
	}
	if(JobDescription == undefined){
		JobDescription="NA"
	}
	if(MinQualRequirements == undefined){
		MinQualRequirements="NA"
	}
	if(PreferredSkills == undefined){
		PreferredSkills="NA"
	}
	if(PostingDate == undefined){
		PostingDate="NA"
	}
	if(PostingUntil == undefined){
		PostingUntil="NA"
	}if(Salary == undefined){
		Salary="NA"
	}




	var connection = connectDB();
	var query = "INSERT INTO `jobposting`(`CompanyId`, `JobCategoryId`, `NoOfPositions`, `JobTitle`, `WorkLocation`, `WorkUnitId`, `JobDescription`, `MinQualRequirements`, `PreferredSkills`, `AdditionalInfo`, `PostingDate`, `PostingUntil`, `Salary`) VALUES ("
			+ CompanyId
			+ ", "
			+ JobCategoryId
			+ ", "
			+ NoOfPositions
			+ ", '"
			+ JobTitle
			+ "', '"
			+ WorkLocation
			+ "', '"
			+ WorkUnitId
			+ "', '"
			+ JobDescription
			+ "', '"
			+ MinQualRequirements
			+ "', '"
			+ PreferredSkills
			+ "', '"
			+ AdditionalInfo
			+ "', '"
			+ PostingDate
			+ "', '"
			+ PostingUntil
			+ "', "
			+ Salary
			+ "); INSERT INTO `recruiterjobposting`(`UserId`, `JobId`) VALUES ("
			+ userId + ", LAST_INSERT_ID());;";
	console.log(query);
	connection.query(query, function(err, rows, fields) {
		if (err)
			throw err;
		res.send("OK");
		connection.end();
	});
};

exports.getCandidateProfile = function(req, res) {
	var userid = Number(req.params.userid);

	console.log('Type of params obtained is '+typeof userid);
	var connection = connectDB();
	var query = "SELECT u.UserId, u.Email, jsi.FName, jsi.LName, jsi.Gender, jsi.DOB, jsi.Address, jsi.Phone, jsi.Address, jsi.Skills, jsi.Experience, jsi.Resume, d.DegreeDesc,  ut.UserTypeDesc FROM `user` u JOIN `jobseekerinfo` jsi on jsi.UserId = u.UserId JOIN `usertype` ut on ut.UserTypeId = u.UserTypeId JOIN `degree` d on d.DegreeId = jsi.DegreeId WHERE u.UserId = "
			+ userid;
	console.log(query);
	connection.query(query, function(err, rows, fields) {
		if (err)
			throw err;
		if (rows.length > 0) {
			res.send(JSON.stringify(rows[0]));
		} else {
			res.send({
				error : "Not Found"
			});
		}
		connection.end();
	});
};


exports.updateJobSeekerProfile = function(req, res) {
	var FName = req.body.FName;
	var LName = req.body.LName;
	var DOB = req.body.DOB;
	var Address = req.body.Address;
	var Phone = req.body.Phone;
	var Gender = req.body.Gender;
	var DegreeId = req.body.DegreeId;
	var Skills = req.body.Skills;
	var Resume = req.body.Resume;
	var Experience = req.body.Experience;
	var userId = req.body.UserId;

	// console.log(userid);
	var connection = connectDB();
	var query = "UPDATE `jobseekerinfo` SET `FName`='" + FName + "',`LName`='"
			+ LName + "',`DOB`='" + DOB + "',`Address`='" + Address
			+ "',`Phone`='" + Phone + "',`Gender`='" + Gender + "',`DegreeId`="
			+ DegreeId + ",`Skills`='" + Skills + "',`Resume`='" + Resume
			+ "',`Experience`='" + Experience + "' WHERE `UserId`=" + userId;
	console.log(query);
	connection.query(query, function(err, rows, fields) {
		if (err)
			throw err;
		res.send("OK");
		connection.end();
	});
};

exports.updateRecruiterProfile = function(req, res) {
	var CompanyId = req.body.CompanyId;
	var Address = req.body.Address;
	var Phone = req.body.Phone;
	var userId = req.body.UserId;

	// console.log(userid);
	var connection = connectDB();
	var query = "UPDATE `recruiterinfo` SET `CompanyId`='" + CompanyId
			+ "',`Address`='" + Address + "',`Phone`='" + Phone
			+ "' WHERE `UserId`=" + userId;
	console.log(query);
	connection.query(query, function(err, rows, fields) {
		if (err)
			throw err;
		res.send("OK");
		connection.end();
	});
};

exports.searchJobs = function(req, res) {
	var connection = connectDB();

	var companyId = req.body.CompanyId;
	var jobCategoryId = req.body.JobCategoryId;
	var jobTitle = req.body.JobTitle;
	console.log("Company Id fetched is "+companyId);
	console.log("JobCategory Id fetched is "+jobCategoryId);
	console.log("job title fetched is "+jobTitle);
	var query = "SELECT jp.JobId, c.CompanyName, jc.JobCategoryDesc, jp.NoOfPositions, jp.JobTitle, jp.WorkLocation, wu.WorkUnitDesc, jp.MinQualRequirements, jp.PreferredSkills, jp.AdditionalInfo, jp.PostingDate FROM `jobposting` jp JOIN `jobcategory` jc ON jc.JobCategoryId = jp.JobCategoryId JOIN `company` c ON jp.CompanyId = c.CompanyId JOIN `workunit` wu ON jp.WorkUnitId = wu.WorkUnitId WHERE ";
	if(jobCategoryId!=null && jobCategoryId != "")
	{
		query += "jp.JobCategoryId = "+ jobCategoryId+" AND ";
	}
	if(companyId!=null && companyId != "")
	{
		query += "jp.companyId = "+ companyId+" AND ";
	}
	if(jobTitle!=null)
	{
		query += "jp.JobTitle like '%" + jobTitle + "%' AND ";
	}

	query += "1";

	console.log(query);
	connection.query(query, function(err, rows, fields) {
		if (err)
			throw err;
		if (rows.length > 0) {
			res.send(rows);
		} else {
			res.send({
				error : "Not Found"
			});
		}
		connection.end();
	});
};


exports.getDegree = function(req, res) {
	var connection = connectDB();
	var query = "SELECT * FROM `degree`";
	connection.query(query, function(err, rows, fields) {
		if (err)
			throw err;
		if (rows.length > 0) {
			res.send(rows);
		} else {
			res.send({
				error : "Not Found"
			});
		}
		connection.end();
	});
};

exports.getUserType = function(req, res) {
	var connection = connectDB();
	var query = "SELECT * FROM `usertype`";
	connection.query(query, function(err, rows, fields) {
		if (err)
			throw err;
		if (rows.length > 0) {
			res.send(rows);
		} else {
			res.send({
				error : "Not Found"
			});
		}
		connection.end();
	});
};

exports.getCompany = function(req, res) {
	var connection = connectDB();
	var query = "SELECT * FROM `company`";
	connection.query(query, function(err, rows, fields) {
		if (err)
			throw err;
		if (rows.length > 0) {
			res.send(rows);
		} else {
			res.send({
				error : "Not Found"
			});
		}
		connection.end();
	});
};

exports.getJobCategory = function(req, res) {
	var connection = connectDB();
	var query = "SELECT * FROM `jobcategory`";
	connection.query(query, function(err, rows, fields) {
		if (err)
			throw err;
		if (rows.length > 0) {
			res.send(rows);
		} else {
			res.send({
				error : "Not Found"
			});
		}
		connection.end();
	});
};

exports.getWorkUnit = function(req, res) {
	var connection = connectDB();
	var query = "SELECT * FROM `workunit`";
	connection.query(query, function(err, rows, fields) {
		if (err)
			throw err;
		if (rows.length > 0) {
			res.send(rows);
		} else {
			res.send({
				error : "Not Found"
			});
		}
		connection.end();
	});
};
/** *****SANDEEP-END*********** */

/** *****SREERAM-START********* */
exports.getJobByID = function(req, res) {

	var jobid = req.params.id;
	var connection = connectDB();
	var query = "select p.*,c.companyName,w.workunitdesc,j.jobcategorydesc from jobposting p,company c,workunit w,jobcategory j where jobid="
			+ jobid
			+ " and c.companyid=p.companyid and p.workunitid=w.workunitid and p.jobcategoryid=j.jobcategoryid";
	connection.query(query, function(err, rows, fields) {
		if (err)
			throw err;
		res.send(rows[0]);
		connection.end();
	});
}

exports.getProfile = function(req, res) {
	var connection = connectDB();
	var userId = req.params.UserId;
	var query = "select * from user where userid=" + userId;
	console.log(query);
	connection.query(query, function(err, rows, fields) {
		console.log("I am here");
		if (err)
			res.send(err);
		//throw err;
		res.send(rows[0]);
	});
}

exports.getCandidates = function(req, res) {

	var jobid = req.params.id;
	var connection = connectDB();
	var query = "select j.userid,s.fname from jobsapplied j,jobseekerinfo s where j.userid=s.userid and jobid="
			+ jobid;
	connection.query(query, function(err, rows, fields) {
		if (err)
			throw err;
		res.send(rows);
		connection.end();
	});
}

exports.getPostedJobs = function(req, res) {
	var connection = connectDB();
	var userId = req.params.UserId;
	var query = "select p.* from jobposting p,recruiterjobposting r where r.jobid=p.jobid and userid="
			+ userId;

	console.log(query);
	connection.query(query, function(err, rows, fields) {
		console.log("I am here");
		if (err)
			throw err;
		res.send(rows);
		connection.end();
	});
}

exports.signup = function(req, res) {
	var role = req.params.role;
	var query, id;
	if (role == 'jobseeker')
		id = 2;
	if (role == 'recruiter')
		id = 3;
	query = "insert into user(email,password,Registrationdate,IsActive,usertypeid) values('"
			+ req.body.email
			+ "','"
			+ req.body.password
			+ "',"
			+ "CURDATE()"
			+ "," + 1 + "," + id + ");"

	console.log(query);
	// console.log(req.body);
	var connection = connectDB();

	connection.query(query, function(err, rows, fields) {

		if (err)
			throw err;
		if (id == 2)
			query = "insert into jobseekerinfo(userid,degreeid) values("
					+ rows.insertId + ",1)";
		else if (id == 3)
			query = "insert into recruiterinfo(`userid`, `CompanyId`) values("
					+ rows.insertId + ", 1)";
		connection.query(query, function(err, rows, fields) {
			if (err)
				console.log(err);
		});

		var response = {
			"status" : "ok"
		};
		res.send(response);
		connection.end();
	})
};

exports.deleteJobPost = function(req, res) {
	console.log("Delete Query executed");
	var jobid = req.params.jobid;
	var connection = connectDB();
	var query = "DELETE FROM `jobsapplied` WHERE JobId=" + jobid
			+ "; DELETE FROM `recruiterjobposting` WHERE JobId=" + jobid
			+ "; delete from jobposting where JobId=" + jobid;
	console.log(query);

	connection.query(query, function(err, rows, fields) {
		// console.log("I am here");
		if (err)
			throw err;
		var response = {
			"status" : "ok"
		};
		res.send(response);
		connection.end();
	});
}

exports.appliedJobs = function(req, res) {
	var connection = connectDB();
	var userId = req.params.UserId;
	var query = "select jp.jobid,jp.jobtitle,c.CompanyName from jobsapplied ja,jobposting jp,company c where ja.jobid=jp.jobid and jp.companyid=c.companyid and ja.userid="
			+ userId;
	console.log(query);
	connection.query(query, function(err, rows, fields) {

		if (err)
			throw err;
		if (rows.length > 0) {
			res.send(rows);
		} else {
			res.send("Not found!!");
		}
		connection.end();
	});
}

exports.authenticate = function(req, res) {
	var email = req.params.email;
	var pass = req.params.password;

	var connection = connectDB();
	var query = "select * from user where email = '" + email
			+ "' and password = '" + pass + "'";
	connection.query(query, function(err, rows, fields) {

		if (err)
			throw err;
		if (rows.length > 0) {
			userId = rows[0].UserId;
			console.log(userId);
			var response = {
				"UserId" : userId,
				"status" : "ok"
			};
			res.send(response);
		} else {
			res.send("Not found!!");
		}
		connection.end();
	});

};


exports.getRecruiterProfile = function(req, res) {
	var userid = req.params.userid;
	console.log(userid);
	var connection = connectDB();
	var query = "SELECT u.UserId, u.Email,u.RegistrationDate,jri.address, jri.phone,c.CompanyName FROM `user` u, recruiterinfo jri,company c where u.userid=jri.userid and jri.companyid=c.companyid and u.userid="+userid;
	console.log("Query for getting recruiter profile");
	console.log(query);
	connection.query(query, function(err, rows, fields) {
		if (err)
			throw err;
		if (rows.length > 0) {
			res.send(JSON.stringify(rows));
		} else {
			res.send({
				error : "Not Found"
			});
		}
		connection.end();
	});
};
