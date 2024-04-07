package database

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/joho/godotenv"
	"golang-backend/models"
	"log"
	"os"
)

var db *gorm.DB

func InitDB() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	user := os.Getenv("DB_USER")
	name := os.Getenv("DB_NAME")
	password := os.Getenv("DB_PASSWORD")

	connectionString := "host=" + host + " port=" + port + " user=" + user + " dbname=" + name + " password=" + password + " sslmode=disable"

	db, err = gorm.Open("postgres", connectionString)
	if err != nil {
		panic("Failed to connect to database")
	}
	db.AutoMigrate(&models.Contact{})
}

func GetDB() *gorm.DB {
	return db
}
