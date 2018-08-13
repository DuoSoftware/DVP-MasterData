var User = require('dvp-mongomodels/model/User');
var UserAccount = require('dvp-mongomodels/model/UserAccount');
var Organisation = require('dvp-mongomodels/model/Organisation');
var Client=require('dvp-mongomodels/model/Client');
var Tenant=require('dvp-mongomodels/model/Tenant').Tenant;
var Resource = require('dvp-mongomodels/model/Resource');
var Console = require('dvp-mongomodels/model/Console');
var Navigation = require('dvp-mongomodels/model/Navigation');
var Package = require('dvp-mongomodels/model/Package');

var fs = require('fs');

var config = require("config");
var util = require("util");
const mongoose = require('mongoose');
var redis = require('ioredis');
//var jsonobj;








var mongoip=config.Mongo.ip;
var mongoport=config.Mongo.port;
var mongodb=config.Mongo.dbname;
var mongouser=config.Mongo.user;
var mongopass = config.Mongo.password;
var mongoreplicaset= config.Mongo.replicaset;

var connectionstring = '';


var redisip = config.Redis.ip;
var redisport = config.Redis.port;
var redispass = config.Redis.password;
var redismode = config.Redis.mode;
var redisdb = config.Redis.db;



mongoip = mongoip.split(',');

if(util.isArray(mongoip)){

    if(mongoip.length > 1){

        mongoip.forEach(function(item){
            connectionstring += util.format('%s:%d,',item,mongoport)
        });

        connectionstring = connectionstring.substring(0, connectionstring.length - 1);
        connectionstring = util.format('mongodb://%s:%s@%s/%s',mongouser,mongopass,connectionstring,mongodb);

        if(mongoreplicaset){
            connectionstring = util.format('%s?replicaSet=%s',connectionstring,mongoreplicaset) ;
        }
    }else{

        connectionstring = util.format('mongodb://%s:%s@%s:%d/%s',mongouser,mongopass,mongoip[0],mongoport,mongodb)
    }

}else{

    connectionstring = util.format('mongodb://%s:%s@%s:%d/%s',mongouser,mongopass,mongoip,mongoport,mongodb)
}

console.log(connectionstring);


var user = new User({ name : "facetoneowner", firstname : "facetoneowner", lastname : "facetoneowner", username : "facetoneowner", password : "$2a$10$nWPLXb4p5wEWvk3g.YRdfOw7d1kAvPuvd45P.1AEaJyv9E0TtZfAe", multi_login : true, phoneNumber : { verified : false, type : "phone", contact : "0771234567" }, email : { verified : true, type : "phone", contact : "facetoneowner" }, user_meta : { role : "superadmin" }, systemuser : true, company : 1, tenant : 1, client_scopes : [ { consoleName : "OPERATOR_CONSOLE", menus : [ { menuItem : "TENANTMONITOR", menuAction : [ { scope : "tenant", read : true, write : true, delete : true } ] } ] } ], user_scopes : [ { scope : "tenant", read : true, write : true, delete : true }, { scope : "user", read : true, write : true, delete : true }, { scope : "externaluser", read : true, write : true, delete : true }, { scope : "userProfile", read : true, write : true, delete : true }, { scope : "organisation", read : true, write : true, delete : true }, { scope : "organisationManage", read : true, write : true, delete : true }, { scope : "package", read : true, write : true, delete : true }, { scope : "resource", read : true, write : true, delete : true }, { scope : "console", read : true, write : true, delete : true }, { scope : "userScope", read : true, write : true, delete : true }, { scope : "userAppScope", read : true, write : true, delete : true }, { scope : "myNavigation", read : true, write : true, delete : true }, { scope : "userGroup", read : true, write : true, delete : true }, { scope : "tag", read : true, write : true, delete : true }, { scope : "codec", read : true, write : true, delete : true }, { scope : "myUserProfile", read : true, write : true, delete : true }, { scope : "trunk", read : true, write : true, delete : true }, { scope : "callrule", read : true, write : true, delete : true }, { scope : "limit", read : true, write : true, delete : true }, { scope : "sysmonitoring", read : true, write : true}, { scope : "cluster", read : true, write : true, delete : true }, { scope : "profile", read : true, write : true, delete : true }, { scope : "context", read : true, write : true, delete : true } ], contacts : [], __v : 0, birthday : Date.now(), gender : "male", avatar : "", address : { number : "403", street : "Galle Road", city : "Colombo 03", province : "Western", country : "Sri Lanka", zipcode : "00300" }, verified : true, group : "58466e3e9e5db600019768bb", locale : "en", app_meta : { subject : "test2", priority : "urgent", description : "test2" }, Active : true, security_level : 1 });

var UserAccount = new UserAccount({ userref : "59008ddd8ef913c5096e5492", user_meta : { role : "superadmin" }, user : "facetoneowner", tenant : 1, company : 1, created_at : Date.now(), updated_at : Date.now(), multi_login : false, client_scopes : [ { consoleName : "OPERATOR_CONSOLE", _id : "599d0ab7d56cbb000171925c", menus : [ { menuItem : "TENANTMONITOR", _id : "599d0ab7d56cbb000171925d", menuAction : [ { scope : "tenant", read : true, write : true, delete : true } ] } ] }, { consoleName : "AGENT_CONSOLE", _id : "599d0ab7d56cbb0001719257", menus : [] }, { consoleName : "SUPERVISOR_CONSOLE", _id : "599d0ab7d56cbb0001719258", menus : [ { menuItem : "BILLING_HISTORY", _id : "599d0ab7d56cbb000171925b", menuAction : [ { scope : "wallet", feature : "wallet access", read : true } ] }, { menuItem : "CREDIT_MANAGER", _id : "599d0ab7d56cbb000171925a", menuAction : [ { scope : "wallet", feature : "wallet access", read : true, write : true, delete : true } ] }, { menuItem : "PACKAGE_MANAGER", _id : "599d0ab7d56cbb0001719259", menuAction : [ { scope : "organisation", feature : "organisation access", read : true, write : true } ] } ] }, { consoleName : "DIGIN_CONSOLE", _id : "5a60944ccb50ab00016b9e8f", menus : [ { menuItem : "DIGIN", _id : "5a6192b7bc10b200012f0c52", menuAction : [ { scope : "hierarchicalsummary", feature : "CreateHierarchicalSummary", read : true, write : true, delete : true }, { scope : "linear_regression", feature : "LinearRegression", read : true, write : true, delete : true }, { scope : "gethighestlevel", feature : "GetHighestLevel", read : true, write : true, delete : true }, { scope : "generateboxplot", feature : "BoxPlotGeneration", read : true, write : true, delete : true }, { scope : "set_init_user_settings", feature : "SetInitialUserEnvironment", read : true, write : true, delete : true }, { scope : "get_component_by_comp_id", feature : "GetComponentByCompID", read : true, write : true, delete : true }, { scope : "get_usage_details", feature : "GetUsageDetails", read : true, write : true, delete : true }, { scope : "activate_packages", feature : "ActivatePackages", read : true, write : true, delete : true }, { scope : "store_datasource_config", feature : "StoreDataSourceConfig", read : true, write : true, delete : true }, { scope : "datasource_delete", feature : "DatasourceDelete", read : true, write : true, delete : true }, { scope : "process_association_rule", feature : "AssociationAnalysis", read : true, write : true, delete : true }, { scope : "buildwordcloud", feature : "BuildWordCloud", read : true, write : true, delete : true }, { scope : "buildbipartite", feature : "BuildBiPartite", read : true, write : true, delete : true }, { scope : "generatehist", feature : "HistogramGeneration", read : true, write : true, delete : true }, { scope : "GetFields", feature : "GetFields", read : true, write : true, delete : true }, { scope : "delete_components", feature : "DeleteComponents", read : true, write : true, delete : true }, { scope : "clustering_kmeans", feature : "ClusteringKmeans", read : true, write : true, delete : true }, { scope : "get_packages", feature : "GetPackages", read : true, write : true, delete : true }, { scope : "get_all_databases", feature : "GetAllDatabases", read : true, write : true, delete : true }, { scope : "get_version", feature : "GetServiceVersions", read : true, write : true, delete : true }, { scope : "update_user_settings", feature : "UpdateUserSettings", read : true, write : true, delete : true }, { scope : "getsentiment", feature : "GetSentiment", read : true, write : true, delete : true }, { scope : "aggregatefields", feature : "AggregateFields", read : true, write : true, delete : true }, { scope : "file_upload", feature : "Upload", read : true, write : true, delete : true }, { scope : "createDataset", feature : "CreateDataset", read : true, write : true, delete : true }, { scope : "get_all_components", feature : "GetAllComponents", read : true, write : true, delete : true }, { scope : "get_usage_summary", feature : "GetUsageSummary", read : true, write : true, delete : true }, { scope : "insert_data", feature : "InsertData", read : true, write : true, delete : true }, { scope : "clear_cache", feature : "ClearCache", read : true, write : true, delete : true }, { scope : "onsite_user_save", feature : "OnsiteUserSetting", read : true, write : true, delete : true }, { scope : "geocoordinate", feature : "GeoCoordinate", read : true, write : true, delete : true }, { scope : "build_datamodel", feature : "BuildDataModel", read : true, write : true, delete : true }, { scope : "executeQuery", feature : "ExecuteQuery", read : true, write : true, delete : true }, { scope : "store_component", feature : "StoreComponent", read : true, write : true, delete : true }, { scope : "get_user_settings", feature : "GetUserSettings", read : true, write : true, delete : true }, { scope : "share_components", feature : "ShareComponents", read : true, write : true, delete : true }, { scope : "check_subscription", feature : "CheckSubscription", read : true, write : true, delete : true }, { scope : "test_database_connection", feature : "TestConnection", read : true, write : true, delete : true }, { scope : "regression_analysis", feature : "RegressionAnalysis", read : true, write : true, delete : true }, { scope : "cloudcharge_handler", feature : "CloudchargeHandler", read : true, write : true, delete : true }, { scope : "forecast", feature : "Forecasting", read : true, write : true, delete : true }, { scope : "generatebubble", feature : "BubbleChart", read : true, write : true, delete : true }, { scope : "GetTables", feature : "GetTables", read : true, write : true, delete : true }, { scope : "store_user_settings", feature : "StoreUserSettings", read : true, write : true, delete : true }, { scope : "fuzzyc_calculation", feature : "ClusteringFuzzyc", read : true, write : true, delete : true }, { scope : "get_customer", feature : "GetCustomer", read : true, write : true, delete : true }, { scope : "get_datasource_config", feature : "GetAllDataSourceConfig", read : true, write : true, delete : true }, { scope : "process_notifications", feature : "NotificationScheduler", read : true, write : true, delete : true }, { scope : "save_redirected_url_data", feature : "SaveRedirectedURLInfo", read : true, write : true, delete : true } ] } ] } ], user_scopes : [ { scope : "tenant", read : true, write : true, delete : true }, { scope : "externaluser", read : true, write : true, delete : true }, { scope : "organisationManage", read : true, write : true, delete : true }, { scope : "myNavigation", read : true, write : true, delete : true }, { scope : "userGroup", read : true, write : true, delete : true }, { scope : "tag", read : true, write : true, delete : true }, { scope : "codec", read : true, write : true, delete : true }, { scope : "myUserProfile", read : true, write : true, delete : true }, { delete : true, write : true, scope : "trunk", read : true }, { scope : "callrule", read : true, write : true, delete : true }, { scope : "limit", read : true, write : true, delete : true }, { scope : "sysmonitoring", read : true, write : true }, { scope : "cluster", read : true, write : true, delete : true }, { read : true, write : false, delete : false, scope : "profile" }, { delete : true, write : true, scope : "context", read : true }, { delete : false, write : true, scope : "billing", read : false }, { delete : true, write : true, scope : "notification", read : true }, { scope : "ardsrequest", read : true, write : true, delete : true }, { scope : "requestmeta", read : true, write : true, delete : true }, { scope : "queue", read : true, write : true, delete : true }, { scope : "requestserver", read : true, write : true, delete : true }, { scope : "attribute", read : true, write : true, delete : true }, { scope : "group", read : true, write : true, delete : true }, { scope : "ardsresource", read : true, write : true, delete : true }, { scope : "resourcetaskattribute", read : true, write : true, delete : true }, { scope : "task", read : true, write : true, delete : true }, { scope : "productivity", read : true, write : true, delete : true }, { scope : "Shared", read : true, write : true, delete : true }, { scope : "taskinfo", read : true, write : true, delete : true }, { delete : true, write : true, scope : "wallet", read : true }, { scope : "aggregatefields", read : true, write : true, delete : true }, { scope : "file_upload", read : true, write : true, delete : true }, { scope : "createDataset", read : true, write : true, delete : true }, { scope : "gethighestlevel", read : true, write : true, delete : true }, { scope : "generateboxplot", read : true, write : true, delete : true }, { scope : "set_init_user_settings", read : true, write : true, delete : true }, { scope : "get_component_by_comp_id", read : true, write : true, delete : true }, { scope : "get_usage_details", read : true, write : true, delete : true }, { scope : "activate_packages", read : true, write : true, delete : true }, { scope : "buildbipartite", read : true, write : true, delete : true }, { scope : "generatehist", read : true, write : true, delete : true }, { scope : "GetFields", read : true, write : true, delete : true }, { scope : "delete_components", read : true, write : true, delete : true }, { scope : "clustering_kmeans", read : true, write : true, delete : true }, { scope : "get_all_components", read : true, write : true, delete : true }, { scope : "get_usage_summary", read : true, write : true, delete : true }, { scope : "insert_data", read : true, write : true, delete : true }, { scope : "clear_cache", read : true, write : true, delete : true }, { scope : "onsite_user_save", read : true, write : true, delete : true }, { scope : "geocoordinate", read : true, write : true, delete : true }, { scope : "build_datamodel", read : true, write : true, delete : true }, { scope : "store_datasource_config", read : true, write : true, delete : true }, { scope : "datasource_delete", read : true, write : true, delete : true }, { scope : "process_association_rule", read : true, write : true, delete : true }, { scope : "buildwordcloud", read : true, write : true, delete : true }, { scope : "get_packages", read : true, write : true, delete : true }, { scope : "get_all_databases", read : true, write : true, delete : true }, { scope : "get_version", read : true, write : true, delete : true }, { scope : "update_user_settings", read : true, write : true, delete : true }, { scope : "getsentiment", read : true, write : true, delete : true }, { scope : "forecast", read : true, write : true, delete : true }, { scope : "generatebubble", read : true, write : true, delete : true }, { scope : "GetTables", read : true, write : true, delete : true }, { scope : "store_user_settings", read : true, write : true, delete : true }, { scope : "fuzzyc_calculation", read : true, write : true, delete : true }, { scope : "get_customer", read : true, write : true, delete : true }, { scope : "get_datasource_config", read : true, write : true, delete : true }, { scope : "process_notifications", read : true, write : true, delete : true }, { scope : "save_redirected_url_data", read : true, write : true, delete : true }, { scope : "hierarchicalsummary", read : true, write : true, delete : true }, { scope : "linear_regression", read : true, write : true, delete : true }, { scope : "executeQuery", read : true, write : true, delete : true }, { scope : "store_component", read : true, write : true, delete : true }, { scope : "get_user_settings", read : true, write : true, delete : true }, { scope : "share_components", read : true, write : true, delete : true }, { scope : "check_subscription", read : true, write : true, delete : true }, { scope : "test_database_connection", read : true, write : true, delete : true }, { scope : "regression_analysis", read : true, write : true, delete : true }, { scope : "cloudcharge_handler", read : true, write : true, delete : true }, { scope : "user", read : true, write : true, delete : true }, { scope : "userProfile", read : true, write : true, delete : true }, { scope : "organisation", read : true, write : true }, { scope : "resource", read : true }, { scope : "package", read : true, write : true, delete : true }, { scope : "console", read : true }, { scope : "userScope", read : true, write : true, delete : true }, { scope : "userAppScope", read : true, write : true, delete : true }, { scope : "userMeta", read : true, write : true, delete : true }, { scope : "userAppMeta", read : true, write : true, delete : true }, { scope : "client", read : true, write : true, delete : true }, { scope : "clientScope", read : true, write : true, delete : true } ], allowed_file_categories : [], verified : true, active : true, __v : 0, group : "58205ef74870360001d049f0" });
var Organisation=new Organisation({ ownerId : "facetoneowner", ownerRef : "576d17f2dd751f010089d15e", companyName : "facetoneowner", companyEnabled : true, id : 1, tenant : 1, tenantRef : "57a062d903c5f54c13ac441e", consoleAccessLimits : [ { accessType : "superadmin", accessLimit : 1, currentAccess : [ "facetoneowner" ] } ], packages : [], packageDetails : [], unitDetails : [], __v : 0, resourceAccessLimits : [], codecAccessLimits : [ { codec : "G722", codecLimit : 5, currentAccess : 0 }, { codec : "G729", codecLimit : 5, currentAccess : 0 }, { codec : "PCMU", codecLimit : 5, currentAccess : 0 }, { codec : "PCMA", codecLimit : 5, currentAccess : 0 } ] });

var Client=new Client({ name : "myapp", clientId : "ae849240-2c6d-11e6-b274-a9eec7dab26b", clientSecret : "6145813102144258048", redirectURL : "http://localhost:3000/callback", owner : "admin", claims : [], __v : 0 });

var Tenant=new Tenant({ id : 1, rootDomain : "duoworld.com", updated_at : Date.now(), created_at : Date.now()});

var Package=new Package({ packageName : "BASIC", packageType : "BASIC", navigationType : "BASIC", description : "Basic Package for Activation", price : 0, setupFee : 0, spaceLimit : [ { spaceType : "VoiceClip_CallCenter", spaceLimit : 100, spaceUnit : "GB" } ], billingType : "onetime",veeryTask : [ "CALL", "TICKET", "CHAT", "SMS", "SOCIAL" ], consoles : [ "AGENT_CONSOLE", "SUPERVISOR_CONSOLE" ], resources : [ { resourceName : "DVP-ARDSLiteService",scopes : [ { scopeName : "ardsresource", feature : "agent access", limit : -1, actions : [ "read", "write", "delete" ] }, { scopeName : "ardsrequest", feature : "request access", limit : -1,actions : [ "read", "write", "delete" ] }, { scopeName : "requestmeta", feature : "requestmeta access", limit : -1,actions : [ "read", "write", "delete" ] }, { scopeName : "queue", feature : "queue access", limit : -1,  actions : [ "read", "write", "delete" ] }, { scopeName : "requestserver", feature : "requestserver access", limit : -1,  actions : [ "read", "write", "delete" ] } ] }, { resourceName : "DVP-ResourceService", scopes : [ { scopeName : "attribute", feature : "attribute access", limit : -1, actions : [ "read", "write", "delete" ] }, { scopeName : "group", feature : "group access", limit : -1,  actions : [ "read", "write", "delete" ] }, { scopeName : "ardsresource", feature : "ardsresource access", limit : -1,  actions : [ "read", "write", "delete" ] }, { scopeName : "resourcetaskattribute", feature : "resourcetaskattribute access", limit : -1,  actions : [ "read", "write", "delete" ] }, { scopeName : "task", feature : "task access", limit : -1,  actions : [ "read", "write", "delete" ] }, { scopeName : "productivity", feature : "productivity access", limit : -1, actions : [ "read", "write", "delete" ] }, { scopeName : "Shared", feature : "Shared access", limit : -1,  actions : [ "read", "write", "delete" ] }, { scopeName : "taskinfo", feature : "taskinfo access", limit : -1,  actions : [ "read", "write", "delete" ] } ] }, { resourceName : "DVP-SIPUserEndpointService",  scopes : [ { scopeName : "sipuser", feature : "sipuser access", limit : 2,  actions : [ "read", "write", "delete" ] } ] } ], consoleAccessLimit : [ { accessType : "admin", accessLimit : 1 }, { accessType : "supervisor", accessLimit : 1 }, { accessType : "agent", accessLimit : 0 } ], __v : 0 });

var AGENT_CONSOLE=new Console({ consoleName: "AGENT_CONSOLE" , consoleUserRoles: ["admin","supervisor","agent"], consoleNavigation: [], created_at: Date.now(), updated_at: Date.now()});

var SUPERVISOR_CONSOLE=new Console({ consoleName: "SUPERVISOR_CONSOLE", consoleUserRoles: ["admin","supervisor"], consoleNavigation: [], created_at: Date.now(), updated_at: Date.now()});

var OPERATOR_CONSOLE=new Console({ consoleName: "OPERATOR_CONSOLE", consoleUserRoles: ["superadmin"], consoleNavigation: [], created_at: Date.now(), updated_at: Date.now()});
//var Package=new Package();


mongoose.connect(connectionstring,{server:{auto_reconnect:true}});
mongoose.connection.on('error', function (err) {
    console.error( new Error(err));
    mongoose.disconnect();

});

mongoose.connection.on('opening', function() {
    console.log("reconnecting... %d", mongoose.connection.readyState);
});


mongoose.connection.on('disconnected', function() {
    console.error( new Error('Could not connect to database'));
    mongoose.connect(connectionstring,{server:{auto_reconnect:true}});
});

mongoose.connection.once('open', function() {
    console.log("Connected to db");

});
mongoose.connection.on('reconnected', function () {
    console.log('MongoDB reconnected!');
});
// agent
fs.readFile("json_files/agentnavi.json",'utf8', function (err,data) {
    if (err) {
        console.log(err);
    }else{
        var jsonobj=JSON.parse(data);
        AGENT_CONSOLE.consoleNavigation = jsonobj;
        console.log(AGENT_CONSOLE);
        AGENT_CONSOLE.save(function (err, result) {
            console.log( AGENT_CONSOLE+"-insert Success ",err,result);
        });
    }

});
// admin
fs.readFile("json_files/adminnavi.json",'utf8', function (err,data) {
    if (err) {
        console.log(err);
    }else{
        var jsonobj=JSON.parse(data);
        SUPERVISOR_CONSOLE.consoleNavigation=jsonobj;
        console.log(SUPERVISOR_CONSOLE);
        SUPERVISOR_CONSOLE.save(function (err, result) {
            console.log( SUPERVISOR_CONSOLE+"-insert Success ",err,result);
        });
    }

});
//operator
fs.readFile("json_files/operaternavi.json",'utf8', function (err,data) {
    if (err) {
        console.log(err);
    }else{
        var jsonobj=JSON.parse(data);
        OPERATOR_CONSOLE.consoleNavigation=jsonobj;
        console.log(OPERATOR_CONSOLE);
        OPERATOR_CONSOLE.save(function (err, result) {
            console.log( OPERATOR_CONSOLE+"-insert Success ",err,result);
        });
    }

});
fs.readFile("json_files/resource.json",'utf8', function (err,data) {
    if (err) {
        console.log(err);
    }else{
        var jsonobj=JSON.parse(data);
        for(var i = 0; i < jsonobj.length; i++) {
            var obj = jsonobj[i];
            var resource = Resource({ resourceName: obj.resourceName, scopes: obj.scopes, created_at: Date.now(), updated_at: Date.now()});
            resource.save(function (err,result) {
                console.log("resource",err, result)
            });
        }
    }
});


user.save(function (err, result) {
    console.log("user",err, result);
    UserAccount.save(function (err, result){
        console.log("UserAccount",err, result)
        Organisation.save(function (err, result){
            console.log("Organisation",err, result)
            Client.save(function (err,result) {
                console.log("Client",err,result)
                Tenant.save(function (err,result) {
                    console.log("Tenant",err,result)
                    Package.save(function (err, result) {
                        console.log("Package",err, result)
                        process.exit();
                    })
                })
            })

        })
    })
})



var redisSetting =  {
    port:redisport,
    host:redisip,
    family: 4,
    //db: redisdb,
    password: redispass,
    retryStrategy: function (times) {
        var delay = Math.min(times * 50, 2000);
        return delay;
    },
    reconnectOnError: function (err) {

        return true;
    }
};

if(redismode == 'sentinel'){

    if(config.Redis.sentinels && config.Redis.sentinels.hosts && config.Redis.sentinels.port && config.Redis.sentinels.name){
        var sentinelHosts = config.Redis.sentinels.hosts.split(',');
        if(Array.isArray(sentinelHosts) && sentinelHosts.length > 2){
            var sentinelConnections = [];

            sentinelHosts.forEach(function(item){

                sentinelConnections.push({host: item, port:config.Redis.sentinels.port})

            })

            redisSetting = {
                sentinels:sentinelConnections,
                name: config.Redis.sentinels.name,
                password: redispass
            }

        }else{

            console.log("No enough sentinel servers found .........");
        }

    }
}

var redisClient = undefined;

if(redismode != "cluster") {
    redisClient = new redis(redisSetting);
}else{

    var redisHosts = redisip.split(",");
    if(Array.isArray(redisHosts)){


        redisSetting = [];
        redisHosts.forEach(function(item){
            redisSetting.push({
                host: item,
                port: redisport,
                family: 4,
                password: redispass});
        });

        var redisClient = new redis.Cluster([redisSetting]);

    }else{

        redisClient = new redis(redisSetting);
    }
}
redisClient.on('error',function(err){

});

var redisMessageHandler = function (err, reply)
{
    if (err)
    {
        console.error('[DVP-MasterData] - REDIS ERROR', err);
    }
};

redisClient.set('token:iss:frodood:021c481a-5510-439d-95b8-ef99672f5faa', '6fe59928-e669-4ce5-ae4b-720688607161');
redisClient.set('token:iss:dinushadck:b11c87b9-3625-4ea4-aeec-c144a066e3b9', 'b370959d-3d35-46ba-b0a3-562b6b5b1b02');
redisClient.set('1_BILL_HASH_TOKEN', '25687166be3bc01b3f4ae89538e17a28');
redisClient.set('1_BILL_TOKEN', '71524551d45354314a80741f7981bdf0b76331adf7abeb64b0eaad7df6d7baa9');

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit();
    });
});


