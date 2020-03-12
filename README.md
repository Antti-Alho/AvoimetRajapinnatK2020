# AvoimetRajapinnatK2020


| User endpoint | params        | Method      | return value |
| ------------- |:-------------:|-------------|--------------|
| /api/user/    |               | GET         | All Users    |
| /api/user/:id |               | GET         | Single User  |
| /api/user/    | User object   | POST        | Creates User |
| /api/user/:id | User object   | PATCH       | Updates User |
| /api/user/:id |               | DELETE      | Deletes User |

| Room endpoint | params        | Method      | return value |
| ------------- |:-------------:|-------------|--------------|
| /api/room/    |               | GET         | All Rooms    |
| /api/room/:id |               | GET         | Single Room  |
| /api/room/    | Room object   | POST        | Creates Room |
| /api/room/:id | Room object   | PATCH       | Updates Room |
| /api/room/:id |               | DELETE      | Deletes Room |

| Auth endpoint | params        | Method      | return value |
| ------------- |:-------------:|-------------|--------------|
| /api/auth/login | {email: email , password: password} | POST | JWT token |

| File endpoint | params        | Method     | return value |
| ------------- |:-------------:|------------|--------------|
| /api/file/upload | FormData Object with image in file variable | POST | Sends image to backend |


