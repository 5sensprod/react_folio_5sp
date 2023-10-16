import React from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

export function WeatherSearchBar({ search, onSearchChange, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Rechercher ..."
          aria-label="Recherche météo"
          aria-describedby="weather-addon"
        />
        <Button variant="outline-success" type="submit">
          <i className="bi bi-search"></i>
        </Button>
      </InputGroup>
    </Form>
  )
}
