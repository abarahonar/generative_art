# Joy Division's Unknown Pleasures Art Cover

Code done following the instructions at [Generative Art — 3 Fundamental Concepts to Get You Started](https://levelup.gitconnected.com/generative-art-3-fundamental-concepts-to-get-you-started-44205dae167b). However, the author didn't interpret `MAX_HEIGHT` and `MAX_WIDTH` correctly (They used `MAX_HEIGHT` for everything). In this version that's fixed

## RUN
```bash
docker run --name joy-division -p 8080:80 -v "$PWD/nginx.conf:/etc/nginx/nginx.conf:ro" -v "$PWD/:/usr/share/nginx/html/:ro" --rm nginx:alpine
```

## TODO
- [ ] Make the ends of the line straight until a point in which the randomness starts.
***
