package controller

import (
	"github.com/gin-gonic/gin"
	"golang-backend/database"
	"golang-backend/models"
	"net/http"
)

func GetContacts(c *gin.Context) {
	var contacts []models.Contact
	db := database.GetDB()
	db.Find(&contacts)
	c.JSON(http.StatusOK, contacts)
}

func CreateContact(c *gin.Context) {
	var contact models.Contact
	c.BindJSON(&contact)
	db := database.GetDB()
	db.Create(&contact)
	c.JSON(http.StatusCreated, contact)
}

func GetContact(c *gin.Context) {
	var contact models.Contact
	contactID := c.Param("id")
	db := database.GetDB()
	db.First(&contact, contactID)
	c.JSON(http.StatusOK, contact)
}

func UpdateContact(c *gin.Context) {
	var contact models.Contact
	contactID := c.Param("id")
	db := database.GetDB()
	if err := db.First(&contact, contactID).Error; err != nil {
		c.AbortWithStatus(http.StatusNotFound)
		return
	}
	c.BindJSON(&contact)
	db.Save(&contact)
	c.JSON(http.StatusOK, contact)
}

func DeleteContact(c *gin.Context) {
	contactID := c.Param("id")
	db := database.GetDB()
	var contact models.Contact
	if err := db.First(&contact, contactID).Error; err != nil {
		c.AbortWithStatus(http.StatusNotFound)
		return
	}
	db.Delete(&contact)
	c.JSON(http.StatusOK, gin.H{"message": "Contact deleted successfully"})
}
