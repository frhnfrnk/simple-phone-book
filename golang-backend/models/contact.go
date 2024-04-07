package models

import "github.com/jinzhu/gorm"

type Contact struct {
	gorm.Model
	Name  string `json:"name"`
	Phone string `json:"phone"`
}
