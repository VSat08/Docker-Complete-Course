## Setting Up Port Accessibility on Host Machine

To ensure that the port is accessible from outside the container, follow these steps:

### 1. Update `package.json` Scripts

- Add the `--host` flag to the `dev` script in your `package.json` file:

```json
"scripts": {
  "dev": "vite --host",
}
```

### 2. Build the Docker Image
- To create the Docker image, use the following command:

```bash
$docker build -t react-docker .
```
### 3. Create and Run the Docker Container
- To create and run the container, execute this command:

```bash
$ docker run -p 5173:5173 react-docker
```


- To Create and Run the Docker Container which is listening to any changes in the local working directory, execute this command:
<<<<<<< HEAD

```bash
$ docker run -p 5173:5173 -v "$(pwd):/app" -v /app/node_modules react-docker
```

### 4. Create docker repository and publishing image
- To create docker repository in docker hub, execute this command:

```bash
$ docker tag react-docker uxsatyam/react-docker 
```
=======
>>>>>>> 17115b63b0eb8494bc04fd8a956f7b0245c062d1

```bash
$ docker run -p 5173:5173 -v "$(pwd):/app" -v /app/node_modules react-docker
```

<<<<<<< HEAD
- To push it into ther epo, execute this command:

```bash
$ docker push uxsatyam/react-docker
```
=======
>>>>>>> 17115b63b0eb8494bc04fd8a956f7b0245c062d1
