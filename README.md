# ToDo's Project for 2021 Interviews

## Stack

- Next.js (Web Framework)
- TypeScript (JavaScript enhancement)
- Zustand (Global State Manager)
- Tailwind CSS (Styles)

## Firebase Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {

      match /toDos/{toDo} {
      	function isOwner() {
        	return resource.data.owner == request.auth.uid
        }
        function doesHaveOwner() {
        	return request.resource.data.owner == request.auth.uid
        }

      	allow read, update, delete: if isOwner();
        allow create: if doesHaveOwner();
      }
    }
  }
}
```
