{
  "id": "/mhsu0020-nginx-mesosphere",
  "cpus": 1,
  "mem": 128,
  "instances": 1,
  "container": {
    "docker": {
      "image": "mhsu0020vny/dcostest:latest",
      "portMappings": [
        {
          "containerPort": 80,
          "protocol": "tcp",
          "name": "http"
        }
      ],
      "network": "BRIDGE"
    }
  },
  "healthChecks": [
    {
      "protocol": "HTTP",
      "path": "/",
      "portIndex": 0,
      "gracePeriodSeconds": 5,
      "intervalSeconds": 10,
      "timeoutSeconds": 10,
      "maxConsecutiveFailures": 3
    }
  ],
  "labels": {
    "DCOS_SERVICE_PORT_INDEX": "0",
    "DCOS_SERVICE_SCHEME": "http",
    "DCOS_SERVICE_NAME": "mhsu0020-nginx-mesosphere"
  }
}
