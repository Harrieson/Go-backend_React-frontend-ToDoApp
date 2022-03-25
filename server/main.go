package main

import (
	"fmt"
	"log"
	"net/http"

	"router"
)

func main() {
	routes := router.Router()
	fmt.Println("Starting the server on port 8000")

	log.Fatal(http.ListenAndServe("8000", routes))
}
