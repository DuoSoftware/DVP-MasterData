#!/bin/bash
Path="$PWD"
apt-get update
apt-get install git -y
apt-get install postgresql postgresql-contrib -y

git clone https://github.com/DuoSoftware/DVP-DBModels.git
cd DVP-DBModels
if [ "$DELETE" = "YES" ]; then 
    sed -i 's|createDB(false|createDB(true|' DBCreatorApi.js 
fi;

#PGPASSWORD=$SYS_DATABASE_POSTGRES_PASSWORD psql -h $SYS_DATABASE_HOST -p $SYS_SQL_PORT -U $SYS_DATABASE_TYPE -c "create database $SYS_DATABASE_POSTGRES_USER";
npm install

# cd config
# sed -i 's|"User": "duo",|"User": "'$SYS_DATABASE_POSTGRES_USER'",|' default.js
# sed -i 's|"Password": "DuoS123",|"Password": "'$SYS_DATABASE_POSTGRES_PASSWORD'",|' default.js
# sed -i 's|"Host": "127.0.0.1",|"Host": "'$SYS_DATABASE_HOST'",|' default.js
# sed -i 's|"Port": "5432",|"Port": "'$SYS_SQL_PORT'",|' default.js
# cd ..

sed -i 's|console.log(res);|console.log(res);process.exit();|' DBCreatorApi.js

nodejs DBCreatorApi.js

cd $Path
git clone https://github.com/DuoSoftware/DVP-MasterData.git
cd DVP-MasterData

for filename in sqlscripts/*; do
  PGPASSWORD=$SYS_DATABASE_POSTGRES_PASSWORD  psql -h $SYS_DATABASE_HOST -p $SYS_SQL_PORT -U $SYS_DATABASE_POSTGRES_USER  -d $SYS_DATABASE_POSTGRES_USER < $filename
done
PGPASSWORD=$SYS_DATABASE_POSTGRES_PASSWORD psql -h $SYS_DATABASE_HOST -p $SYS_SQL_PORT -U $SYS_DATABASE_TYPE -c "INSERT INTO public.\"CSDB_Clusters\"(
            id, \"Name\", \"Activate\", \"Code\", \"CompanyId\", \"TenantId\", \"CloudModel\", 
            \"Class\", \"Type\", \"Category\", \"LoadBalancerId\", \"createdAt\", \"updatedAt\", 
            \"ParentCloudId\")
    VALUES (1, 'facetone-cluster', true, 1, 1, 1, 1, 
            'DVP', 'CLUSTER','PUBLIC',null, '2018-03-27 00:00:00-04', '2018-03-27 00:00:00-04', 
            null);";
            
PGPASSWORD=$SYS_DATABASE_POSTGRES_PASSWORD psql -h $SYS_DATABASE_HOST -p $SYS_SQL_PORT -U $SYS_DATABASE_TYPE -c "INSERT INTO public.\"DB_CAMP_CallBackReasons\"(
VALUES ('PERSONAL_REASON',true,'2017-02-12T13:32:50.717Z','2017-02-12T13:32:50.717Z');";


# cd config

# sed -i 's|"user": "duo",|"user": "'$SYS_MONGO_USER'",|' default.js
# sed -i 's|"password": "DuoS123",|"password": "'$SYS_MONGO_PASSWORD'",|' default.js
# sed -i 's|"ip":"localhost",|"ip": "'$SYS_MONGO_HOST'",|' default.js
# sed -i 's|"dbname": "facetone",|"dbname": "'$SYS_MONGO_DB'",|' default.js
# sed -i 's|"port": "27017",|"port": "'$SYS_MONGO_PORT'",|' default.js
# sed -i 's|"replicaset" :"localhost"|"replicaset": "'$SYS_MONGO_HOST'",|' default.js
# cd ..
npm install
nodejs app.js
echo "done....." 


