case $1 in

dev | development)
npx -y http-server src -c-1
;;

prod | production)
npx -y http-server src
;;

lint)
;;

test)
;;

fmt | format)
;;

esac