#!/bin/bash

appName=$(cat service.txt)

docker stop -t 0 "$appName"
