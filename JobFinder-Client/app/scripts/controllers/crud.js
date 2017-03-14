/**
 * Created by ratan_000 on 5/7/2016.
 */
angular.module('clientApp')
  .controller('crudCtrl', function ($scope,$http,$compile,$document) {

    var parent =$document.find('#f1');
    var json = {
      "cluster": {
        "id": "ad",
        "status": false,
        "servers": [
          {
            "id": "amet ex voluptate dolor",
            "role": "openstack",
            "memory_gb": 4318768,
            "tags": [
              "mollit"
            ],
            "installed_image": "ut adipisicing",
            "interfaces": [
              {
                "id": "magna",
                "ip_address": "officia tempor"
              },
              {
                "id": "volupta",
                "ip_address": "in deserunt"
              },
              {
                "id": "tempor Lorem proiden",
                "ip_address": "aliquip qui occaecat"
              },
              {
                "id": "sit et",
                "ip_address": "sunt"
              }
            ],
            "management_interface": "dolore cillum ad"
          },
          {
            "id": "exercitation culpa",
            "role": "config",
            "memory_gb": 88133004,
            "tags": [
              "est",
              "proident",
              "incididunt"
            ],
            "installed_image": "do ut et",
            "interfaces": [
              {
                "id": "est nisi commodo",
                "ip_address": "ad mollit ullamco"
              }
            ],
            "management_interface": "dolor"
          },
          {
            "id": "magna",
            "role": "config",
            "memory_gb": 6589622,
            "tags": [
              "consectetur Excepteur",
              "nostrud ut",
              "Ut nulla consectetur dolor"
            ],
            "installed_image": "eu eiusmod proident",
            "interfaces": [
              {
                "id": "non dolore consectetur ut",
                "ip_address": "dolor Ut deserunt sunt"
              },
              {
                "id": "velit do tempor",
                "ip_address": "laboris"
              }
            ],
            "management_interface": "aute adipisicing"
          }
        ]
      }
    };


    var json1 = {
      "cluster": {
        "id": "ad",
        "status": false,
        "servers": [
          {
            "id": "server[1].id",
            "role": "server[1].role",
            "memory_gb": "server[1].mem",
            "installed_image": "server[1].img",
            "management_interface": "dolore cillum ad"
          },
          {
            "name":"akshay"
          }
        ],
        "tags": [
          "mollit"
        ]
      }
    };
  function fun1(val, key, parent) {
    // string, boolean, number
    if (typeof(val) == "number" || typeof(val) == "string" || typeof(val) == "boolean") {
      console.log(key + "::" +val);
      var keys=key.split('.');
      key = keys[keys.length-1];

      var newLI=angular.element("<li>" + key + ":" + val + "</li>");
      parent.append(newLI);
    }
    // check for array && Array.isArray(val)
    else if (typeof(val) == "object" && Array.isArray(val) ) {
      var newULStart=angular.element("<UL>");
      parent.append(newULStart);
      temp = parent;
      parent = newULStart;
      // ATTACHING LEVEL SYMBOL
      var keys=key.split('.');
      key = keys[keys.length-1];
      var START=angular.element("<span>" +key+ " [ " + "</span>");
      parent.append(START);

      for(item in val) {
        fun1(val[item],  key+"."+item, parent);
      }

      var ULeND=angular.element("</UL>");
      var END=angular.element("<span>] </span>");
      parent.append(END);
      parent.append(ULeND);
     parent = newULStart;
      parent = temp;

    }
    //check for object
    else {
     // alert("putting OL1:");
      var newULStart=angular.element("<UL>");
      parent.append(newULStart);
      temp = parent;
      parent = newULStart;
      var START1=angular.element("<span> {  </span>");
      parent.append(START1);

      for(item in val) {

        fun1(val[item], key+"."+item, parent,key);
      }
      var ULeND=angular.element("</UL>");
      var END=angular.element("<span> }</span>");
      parent.append(END);
      parent.append(ULeND);
      parent = newULStart;
      parent = temp;

     // alert("closing  OL1:");
    }
  }
   // fun1(json, "",parent );

    function updatefun1(val, key, parent) {
      // string, boolean, number
      if (typeof(val) == "number" || typeof(val) == "string" || typeof(val) == "boolean") {
        console.log(key + "::" +val);
        var keys=key.split('.');
        var key1 = keys[keys.length-1];
        var parametre = key.slice(2).toString();
        console.log("para:" + parametre);            //ng-model="updated.abc"
        $scope.updated;
        var test = "updated."+key;
        var newLI=angular.element("<li>" + key1 + ":" + val + "<input ng-model='updated' type='text' id=" + key + "/>" + "<button ng-click='updateMe(\"" + key + "\")'> update Me </button>" + "</li>" );
      //  var newLI=angular.element("<li>" + key1 + ":" + val + "<input ng-model="+ test +" type='text' id=" + key + "/>" + "<button ng-click='updateMe(\"" + key + "\")'> update Me </button>" + "</li>" );
         newLI = $compile(newLI)($scope);
        parent.append(newLI);

      }
      // check for array && Array.isArray(val)
      else if (typeof(val) == "object" && Array.isArray(val) ) {
        var newULStart=angular.element("<UL>");
        parent.append(newULStart);
        temp = parent;
        parent = newULStart;
        // ATTACHING LEVEL SYMBOL
        var keys=key.split('.');
        var key1 = keys[keys.length-1];
        var START=angular.element("<span>" +key1+ " [ " + "</span>");
        parent.append(START);

        for(item in val) {
          updatefun1(val[item],  key+"["+item+"]", parent);
        }

        var ULeND=angular.element("</UL>");
        var END=angular.element("<span>] </span>");
        parent.append(END);
        parent.append(ULeND);
        parent = newULStart;
        parent = temp;

      }
      //check for object
      else {
        // alert("putting OL1:");
        var newULStart=angular.element("<UL>");
        parent.append(newULStart);
        temp = parent;
        parent = newULStart;
        var START1=angular.element("<span> {  </span>");
        parent.append(START1);

        for(item in val) {

          updatefun1(val[item], key+"."+item, parent,key);
        }
        var ULeND=angular.element("</UL>");
        var END=angular.element("<span> }</span>");
        parent.append(END);
        parent.append(ULeND);
        parent = newULStart;
        parent = temp;

        // alert("closing  OL1:");
      }
    }
    updatefun1(json, "A",parent );

 $scope.updateMe = function(a){
   //
   //  accessing input
   //
   //alert(document.getElementById(a).val());
   //console.log($scope.updated.A.cluster.servers[0].interfaces[0].id);
   console.log("val-->" + $scope.a);
   var input=$document.find('#'+a);
   alert("input:"+ input);
   console.log("****************");
   console.log(json.cluster)


  // alert("updating");
   console.log("updating" + a);
   a = a.split('');
   var s = a.map(function (ele){
     if( ele == '[' ){
       return '.'
     }else{
       return ele;
     }
   });

   //alert(s);

    s = s.filter(function (ele){
       if(ele == ']'){
          return false;
        }else {
          return true;
        }
   });

   //alert(s);

   s= s.slice(2);
   s=s.join('');


   alert('str: ' + s);
   //var str= "cluster.servers.1.tags.2";
   var str=s;
   var keys = str.split(".");

   //json1[][][]= 5
   var sample=json;
   var i;
   for( i = 0 ; i < keys.length-1; i++){
     //json1[scluster]["servers"]["0"]
   // json1[ sample[keys[i]] ];
    // sample = sample +'[' + keys[i]+ ']';
     sample = sample[keys[i]];

   }



   console.log("sample::" + sample);
   sample[keys[i]]=$scope.updated;
  // json[str]="updated!!";
   console.log("oooooooooooooooo");
 //  console.log(json[str]);
  $document.find('#f1').empty();
   var parent1= $document.find('#f1');
   updatefun1(json, "A",parent1 );
 };
});















