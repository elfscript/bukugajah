#!/bin/bash
echo $@
docker run -it --rm  --name mynodejs \
  -v $(pwd):/mnt/test  -w /mnt/test \
  -p 80:3000 \
	 node:4.8 /bin/bash

