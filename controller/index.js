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
  var today = new Date();
  var a = String(today.getDate())
  var b = String(today.getMonth() + 1);
  // if (b < 10) {
  //   return "0" + b
  // }
  Users.find(function (err, data) {
    const ppp = data;
    if (err) {
      res.json({ ERROR: err });
    }
    else {

      const regex = new RegExp(a + "[-/]" + b + "[-/][0-9]{4}");
      var pp = []
      var ans = []
      for (let i = 0; i < ppp.length; i++) {
        pp.push((ppp[i]["dob"]));
          if ((regex.test(pp[i])) == true) {
            ans.push(ppp[i]['fname'] + " " + ppp[i]['lname']);
            continue;
          }
      }
      res.send(ans)
    }
  })
}
        //   for (let j = 0; j < pp.length; j++) {
        //     var b = pp[j].split("/").splice(0, 2);
        //     var c = arraryEqual(current, b);
        //     if (c) {
        //       ans.push(pp[j])
        //       break;
        //     }
        //   }
        //   for (let k = 0; k < ppp.length; k++) {
        //     if (ppp[k]["dob"] == ans.join("")) {
        //       ans1.push(ppp[k]['fname'] + " " + ppp[k]['lname']);
        //     }
        //   }
        // }
        // res.send(ans1);


exports.todayBday = function (req, res) {
  let id = req.params.userId;
  console.log(id)
  Users.findById(id,function (err, data) {
    if (err) {
      res.send("error");
    }
    else {
      if(data.getIfBday()){
        res.send("Happy Birthday!!");
    }
      else
        res.send("Nope;(")
    }
  });
  // const doc = Users.findById(id);
  // console.log(doc.getIfBday());
};
exports.getFullName = function (req, res) {
  let userId = req.params.id;
  Users.findById(userId, function (err, data) {
    if (err) {
      res.json({ ERROR: err });
    } else {
      res.send(data.fname+" "+data.lname);
    }
  });
};



