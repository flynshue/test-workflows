package main

import (
	"fmt"
	"os"
	"time"
)

func main() {
	args := os.Args[1:]
	if len(args) == 0 {
		fmt.Println("Not enough arguments")
		os.Exit(1)
	}
	greeting := args[0]
	setOutput("greet", greeting)
	now := time.Now().Format(time.RFC3339)
	setOutput("time", now)
}

func setOutput(name, value string) {
	fmt.Printf("::set-output name=%s::%s\n", name, value)
}
