## Basic version of Medium Blog website
Medium like application that let’s users create and publish blogs.

### Preview

![Screenshot 2024-03-09 121613](https://github.com/abhirajthakur/medium-blog/assets/72484943/7d9e23b8-fe2f-4b20-b88f-a638c5efec71)
![Screenshot 2024-03-09 121629](https://github.com/abhirajthakur/medium-blog/assets/72484943/c04e13c7-9332-47d6-8767-628727f3255b)
![Screenshot 2024-03-09 140727](https://github.com/abhirajthakur/medium-blog/assets/72484943/5ab6beb5-0392-4201-877a-e8618a0e5aa3)
![Screenshot 2024-03-09 140745](https://github.com/abhirajthakur/medium-blog/assets/72484943/bedae002-1b45-4823-b9b1-2c5da3b2b815)
![Screenshot 2024-03-09 140801](https://github.com/abhirajthakur/medium-blog/assets/72484943/fd5dd286-205b-4a3c-8581-432dae28bb21)

You can visit the site by going to this link [https://medium-blog-orpin.vercel.app/signup](https://medium-blog-orpin.vercel.app/signup)

### Technologies Used:
- React - Frontend framework
- Cloudflare workers - Backend
- Typescript as the language
- Prisma - ORM with connection pooling
- Postgres - Database
- Tailwind CSS - Styling framework
- zod - Input validation, type inference for the frontend types
- JWT (JSON web tokens) - authentication

## Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/abhirajthakur/medium-blog
```

### 2. Navigate to the frontend directory in medium-blog

```bash
cd frontend
npm install
```

### 3. Navigate to the backend directory in medium-blog

```bash
cd backend
npm install
```

### 4. Initialize Database (Prisma)

Get your connection url from [Neon](https://neon.tech/) or [Aiven](https://aiven.io/).  

Get connection pool URL from [Prisma accelerate](https://www.prisma.io/data-platform/accelerate).  

Replace DATABASE_URL in .env in the backend directory
`DATABASE_URL="postgres://avnadmin:password@host/db" # Replace with the url you got back from Neon or Aiven`

Add DATABASE_URL and SECRET_KEY in wrangler.toml file
```
DATABASE_URL = "" # Paste the DATABASE_URL you got back from prisma accelerate
SECRET_KEY = "" # Enter the secret used to sign and verity the jwt token
```

Run the commands given below in the backend directory
###### Migrate your database
`npx prisma migrate dev`

###### Generate the prisma client
`npx prisma generate --no-engine`

###### Add the accelerate extension 
`npm install @prisma/extension-accelerate`

### 5. Start the application

Run the command given below in the frontend directory.

```bash
npm run dev
```

Open another terminal window with backend directory and run the same command.

```bash
npm run dev
```

Add the server url given by the backend in the .env file in the frontend directory.
`.env.example` file is also provided in the `frontend` folder for the reference.  

Open your web browser and navigate to `http://localhost:5173/signup` to access the application.
