PWD := $$(pwd)
.PHONY: tiled stop-tiled

tiled:
	docker run --name tiled -p 8080:80 \
		-v "$(PWD)/nginx.conf:/etc/nginx/nginx.conf:ro" \
		-v "$(PWD)/01 Tiled Lines/:/usr/share/nginx/html/:ro" -d --rm nginx:alpine

stop:
	docker stop tiled