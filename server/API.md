# Event Management System API

This document describes the main REST API endpoints exposed by the backend.

## Base URL

```text
http://localhost:5000/api
```

Protected endpoints expect a valid JWT in the `Authorization` header:

```text
Authorization: Bearer <token>
```

## Authentication

### Register

`POST /api/auth/register`

Example request:

```json
{
  "username": "Timofii",
  "email": "timofii@example.com",
  "password": "password123"
}
```

Validation requires all fields, a username of at least 3 characters, a valid email address and a password of at least 6 characters.

### Login

`POST /api/auth/login`

Example request:

```json
{
  "email": "timofii@example.com",
  "password": "password123"
}
```

## Events

| Method | Endpoint | Description | Access |
| --- | --- | --- | --- |
| GET | `/api/events` | Get all events | Public |
| GET | `/api/events/:id` | Get an event by ID | Public |
| POST | `/api/events` | Create an event | Admin |
| PUT | `/api/events/:id` | Update an event | Admin |
| DELETE | `/api/events/:id` | Delete an event | Admin |

Admin operations require authentication and the administrator role.

## Bookings

| Method | Endpoint | Description | Access |
| --- | --- | --- | --- |
| POST | `/api/bookings` | Create a booking | Authenticated |
| GET | `/api/bookings/my` | Get the current user's bookings | Authenticated |
| DELETE | `/api/bookings/:id` | Delete a booking | Authenticated |

## Feedback

| Method | Endpoint | Description | Access |
| --- | --- | --- | --- |
| POST | `/api/feedback` | Submit feedback | Authenticated |
| GET | `/api/feedback/event/:eventId` | Get feedback for an event | Public |

## Administration

All `/api/admin` endpoints require authentication and the administrator role.

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/admin/events` | Get all events for administration |
| GET | `/api/admin/bookings` | Get all bookings |
| GET | `/api/admin/feedback` | Get all feedback |

## Common HTTP status codes

- `200 OK` - request completed successfully.
- `201 Created` - a resource was successfully created.
- `400 Bad Request` - request data is invalid.
- `401 Unauthorized` - authentication is missing or invalid.
- `403 Forbidden` - the authenticated user does not have sufficient permissions.
- `404 Not Found` - requested resource was not found.
- `500 Internal Server Error` - an unexpected server error occurred.

## Backend organization

The backend is split into logical modules:

- `routes/` defines REST endpoints.
- `controllers/` contains request handling and application logic.
- `models/` contains database access logic.
- `middleware/` contains authentication, authorization, validation and error-handling middleware.

The application uses MySQL through `mysql2/promise`, JWT authentication, bcrypt password hashing and Express middleware.
