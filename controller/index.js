const Users = require("../schema/index");
const moment = require("moment");
const { futimesSync } = require("fs");

exports.getProfiles = function (req, res) {
  Users.find(function (err, data) {
    if (err) {
      res.json({ ERROR: err });
    } else {
      res.json(data);
    }
  });
};

exports.getAllbday = function (req, res) {
  function arraryEqual(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length == b.length && (a.every((val, index) => val === b[index]));
  }
  var today = new Date();
  var a = String(today.getDate())
  var b = String(today.getMonth() + 1);
  var current=[a,b]
  console.log(current);
  Users.find(function (err, data) {
    const ppp = data;
    if (err) {
      res.json({ ERROR: err });
    }
    //   else {
    //   //   var pp = []
    //   //   for (var i = 0; i < ppp.length; i++) {
    //   //     pp.push((ppp[i]["dob"]));
    //   //   }
    //   //   for (let j = 0; j < pp.length; j++) {
    //   //     var b = pp[j].split("/").splice(0, 2);
    //   //     var c = arraryEqual(current, b);
    //   //     if (c) {
    //   //       ans.push(pp[j])
    //   //       break;
    //   //     }
    //   //   }
    //   //   for (let k = 0; k < ppp.length; k++) {
    //   //     if (ppp[k]["dob"] == ans.join("")) {
    //   //       ans1.push(ppp[k]['fname'] + " " + ppp[k]['lname']);
    //   //     }
    //   //   }
    //   // }
    //   // res.send(ans1);
    // });
  
  }
  );
}


exports.todayBday = function (req, res) {
  let id = req.params.userId;
  console.log(id);
  Users.findById(id, function (err, data) {
    if (err) {
      res.send("error");
    }
    else if(data.getIfBday())
        return res.send("Happy Birthday!!");
  });
};
exports.getFullName = function (req, res) {
  let userId = req.params.id;
  Users.findById(userId, function (err, data) {
    if (err) {
      res.json({ ERROR: err });
    } else {
      res.send(data.fullName);
    }
  });
};



