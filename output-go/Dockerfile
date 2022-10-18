# Container image that runs your code
FROM golang:alpine3.16

WORKDIR $GOPATH/src/
ADD . .

RUN go get -d -v \
  && go build -o /go/bin/output-go

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/go/bin/output-go"]