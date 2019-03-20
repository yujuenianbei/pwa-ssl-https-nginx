

docker run -p 8081:80 -p 8082:443 --name mynginx -v $PWD/html:/usr/share/nginx/html -v $PWD/conf/nginx.conf:/etc/nginx/nginx.conf -v $PWD/conf.d/default.conf:/etc/nginx/conf.d/default.conf -v $PWD/logs:/var/log/nginx  -d nginx
docker run -p 8081:80 -p 8082:443 --name mynginx -v $PWD/html:/usr/share/nginx/html -v $PWD/conf/nginx.conf:/etc/nginx/nginx.conf -v $PWD/conf.d/default.conf:/etc/nginx/conf.d/default.conf -v $PWD/logs:/var/log/nginx  -d nginx

### 证书目录
本机　　　$PWD/conf.d　　
docker  /etc/nginx/conf.d/　目录下

openssl req -x509 -nodes -days 36500 -newkey rsa:2048 -keyout　nginx.key -out nginx.crt