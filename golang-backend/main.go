package main

import (
	"github.com/gin-gonic/gin"
	"golang-backend/controller" // mengimpor paket controller
	"golang-backend/database"
)

func main() {
	r := gin.Default()

	database.InitDB()

	contactsGroup := r.Group("/contacts")
	{
		contactsGroup.GET("", controller.GetContacts)
		contactsGroup.POST("", controller.CreateContact)
		contactsGroup.GET("/:id", controller.GetContact)
		contactsGroup.PUT("/:id", controller.UpdateContact)
		contactsGroup.DELETE("/:id", controller.DeleteContact)
	}

	r.Run(":8080")
}
