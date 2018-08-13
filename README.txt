Files Required 
-Dockerfile
-Start.sh

docker build -t data:0.1 .

docker run -d --env="SYS_DATABASE_TYPE=postgres" --env="SYS_DATABASE_POSTGRES_USER=duo" --env="SYS_DATABASE_POSTGRES_PASSWORD=DuoS123" --env="SYS_DATABASE=duo" --env="SYS_SQL_PORT=5432" --env="SYS_DATABASE_HOST=192.168.1.2" --env="SYS_MONGO_HOST=192.168.1.2" --env="SYS_MONGO_PORT=27017" --env="SYS_MONGO_DB=facetone" --env="SYS_MONGO_PASSWORD=DuoS123" --env="SYS_MONGO_USER=duouser" --env="SYS_REDIS_HOST=192.168.1.2" --env="SYS_REDIS_PORT=6389" --env="SYS_REDIS_USER=duo" --env="SYS_REDIS_PASSWORD=DuoS123" --env="SYS_REDIS_MODE=instance" --env="SYS_REDIS_SENTINEL_HOSTS=192.168.1.2" --env="SYS_REDIS_SENTINEL_PORT=16389"  --env="SYS_REDIS_SENTINEL_NAME=redis-cluster" --env="DELETE=NO" --name DVP-Data data:0.1 /Start.sh
