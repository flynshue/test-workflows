package main

import (
	"fmt"
	"log"
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
	now := time.Now().Format(time.RFC3339)
	err := setOutputFile("greet", greeting)
	if err != nil {
		log.Fatal(err)
	}
	err = setOutputFile("time", now)
	if err != nil {
		log.Fatal(err)
	}
}

func setOutput(name, value string) {
	fmt.Printf("::set-output name=%s::%s\n", name, value)
}

func setOutputFile(name, value string) error {
	outFile := os.Getenv("GITHUB_OUTPUT")
	f, err := os.OpenFile(outFile, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		return err
	}
	defer f.Close()
	output := fmt.Sprintf("%s=%s\n", name, value)
	_, err = f.WriteString(output)
	return err
}
