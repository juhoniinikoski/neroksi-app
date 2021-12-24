<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h1 align="center">neroksi</h1>

  ![Cover image](/client/assets/neroksi.png)

  <p align="center">
    your learning community
    <br />
    <!-- <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a> -->
    <!-- <br />
    <br /> -->
    <a href="https://github.com/juhoniinikoski/neroksi-app/tree/main/client">Client docs</a>
    ·
    <a href="https://github.com/juhoniinikoski/neroksi-app/tree/main/neroksi-api">API docs</a>
    <!-- ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<!-- <details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details> -->



<!-- ABOUT THE PROJECT -->
## About The Project

Vision for neroksi is to be the platform, that connects people who are eager to learn, despite their location. It brings together people, who are interested in learning the same topics, but as well gives an opportunity to get out of the box to widen the scope of knowledge.

neroksi is built around:
* Ease of use
* Gamification
* Strenght of community

### Built With

* [React Native](https://reactnative.dev)
* [Expo](https://docs.expo.dev)
* [GraphQL](https://graphql.org)
* [Apollo](https://www.apollographql.com)
* [Koa.js](https://koajs.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## 🚀 Getting started

Currently, in order to test the application, you should run both client and API locally. To get a local copy up and running, follow these simple example steps.

### ✔️ Requirements

Node (versions `12.X.X` are tested, but later versions _might_ work as well) and npm. If you haven't installed Node or npm, [nvm](https://github.com/nvm-sh/nvm) is an easy to use tool for installing both. Nvm is also handy if you want to quickly switch between different Node versions.

The client app is built by utilizing [Expo](https://expo.dev) framework. If you haven't installed Expo on your local environment, run `npm install --global expo-cli` to access Expo command line tools.

#### API

1. Clone this repository and run `npm install` in the `neroksi-api` directory.

2. Create a file `.env` in the `neroksi-api` directory and copy the contents of the `.env.template` file there. If you want, you can also use a different secret for the `JWT_SECRET` variable, which is used to sign access tokens.

3. Run `npm run build`. This will setup the SQLite database and run the migrations.

4. To populate the database with some seed data, please run `npm run seed:run`.

5. Run `npm start` to start the server.

#### Client

1. Run `npm install` in the `client` directory.

2. Run `npm start` to start the app. After the app has started you should be able to access the [Metro](https://facebook.github.io/metro/) bundler at http://localhost:19002.


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Juho Niinikoski - niinikoskijuho@gmail.com

Project Link: [https://github.com/juhoniinikoski/neroksi-app](https://github.com/juhoniinikoski/neroksi-app)

<p align="right">(<a href="#top">back to top</a>)</p>
