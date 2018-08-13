module.exports = {
  "DB": {
     "Type": "postgres",
      "User": "duo",
      "Password": "DuoS123",
      "Port": 5432,
      "Host": "127.0.0.1",
      "Database": "facetone",
      "Cluster": true,
      "dialectOptions":{
          "keepAlive": false,
          "statement_timeout": 10000
      }
  },

  "Redis":
  {
    "ip": "45.55.142.207",
    "port": 6389,
    "password":"DuoS123",
    "db": 0,
    "mode": "sentinel",
    "sentinels":{
      "hosts": "138.197.90.92,45.55.205.92,138.197.90.92",
      "port":16389,
      "name":"redis-cluster"
    }
  },

  // "Security":
  // {
  //   "ip" : "45.55.142.207",
  //   "port": 6389,
  //   "user": "duo",
  //   "password": "DuoS123",
  //   "mode":"sentinel",//instance, cluster, sentinel
  //   "sentinels":{
  //     "hosts": "138.197.90.92,45.55.205.92,138.197.90.92",
  //     "port":16389,
  //     "name":"redis-cluster"
  //   }
  // },

  "Mongo":
  {
    "ip":"192.168.2.207",
    "port":"27017",
    "dbname":"facetone",
    "password":"DuoS123",
    "user":"duouser",
    "replicaset" :"localhost"
  }

  // "Kamailio":
  // {
  //   "User":"root",
  //   "Password":"DuoS123",
  //   "Host":"104.131.105.222",
  //   "Database":"kamailio",
  //   "Port":"3306"
  // },
  //
  // "Host":
  // {
  //   "domain": "0.0.0.0",
  //   "port": 8086,
  //   "version":"1.0.0.0",
  //   "encryptionPassword": "DuoS123"
  // }
};
