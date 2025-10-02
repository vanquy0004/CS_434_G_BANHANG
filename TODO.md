# TODO: Handle Login/Register Logic

## Backend Changes
- [x] Update authService.js: Implement real login using database query and bcrypt verification
- [x] Add register function in authService.js: Hash password and insert user
- [x] Update authController.js: Add register handler, update login to return user data
- [x] Update authRoutes.js: Add POST /register route
- [x] Update userService.js: Modify createUser to hash password before insertion

## Frontend Changes
- [x] Update Register.vue: Add reactive form state, validation, submit handler, and API call to register endpoint

## Testing
- [x] Test login flow: Ensure login works with database users (requires running backend and frontend servers)
- [x] Test register flow: Ensure new users can register and login (requires running backend and frontend servers)
