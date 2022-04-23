<br/>
<p align="center">
  <h3 align="center">GasWatch</h3>

  <p align="center">
    A bot to alert a role when Ethereums GAS price drops below a certain value.
    <br/>
    <br/>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/AdamT20054/GasWatch/total) ![Contributors](https://img.shields.io/github/contributors/AdamT20054/GasWatch?color=dark-green) ![Forks](https://img.shields.io/github/forks/AdamT20054/GasWatch?style=social) ![Stargazers](https://img.shields.io/github/stars/AdamT20054/GasWatch?style=social) ![Issues](https://img.shields.io/github/issues/AdamT20054/GasWatch) ![License](https://img.shields.io/github/license/AdamT20054/GasWatch) 

## About The Project

The GasWatch bot is built to watch Ethereums gas price and act accordingly based on values defined by its config. The bot will take the value defined by `cooldown` and `gasvalue` and ping users who have a certain role whenever the API returns a value below `gasvalue`, as long as it is occurs after the time defined by `cooldown` has passed.

## Built With

The GasWatch bot is built with Discord.js V13. It uses Axios for the API requests.

The value for Ethereums current GAS used for the alerts, and the values used for the gas tracker in the activity section are fetched from https://ethergas.io

## Getting Started

Invite the bot here: *insert link*



If you would like to host your own local version, you can follow the steps below. *Please note that the self hosted version is different to the public one hosted. The self hosted version is built to be used on one specific server while the public version is built for hundreds of servers to use at once.*

### Prerequisites




### Installation

1. Clone the github repo
```sh
git clone https://github.com/Adamt20054/GasWatch.git
```

2. Make sure you have the latest Node.js and NPM version installed and then go into the folders directory, open a terminal and install the packages required in `package.json` by doing

     ```sh
     npm install
     ```
     A new file called `package-lock.json` should appear after NPM has installed the packages it needs.
 
 
 3. Get a bot token by creating an application at https://discord.com/developers/applications

4. Paste the token into `/src/Data/config.json` in the "token" value.

5. Choose a prefix you want your bot to use, and then put it in the prefix value.

6. Grab the Channel ID of the channel you want users to be pinged in, and then put it in the "ChannelID" value.

7. Grab the Role ID of the role you want to be pinged, and then put it in the RoleID value.

6. Run the bot by going into the main directory and running
```sh
     node index.js
```

## Usage

Once the bot is running and you have invited it to your server, you can use
```sh
{prefix}gasvalue {value}
```
to make the bot ping users when the GWEI is below that level.
Eg, if you wanted users to be pinged when the GAS is below 70 GWEI, you'd do
```sh
-gasvalue 70
```


You can also change the time inbetween pings so users dont get spammed using 
```sh
{prefix}cooldown {value in ms}
```
The program checks the API every 15minutes, so without this cooldown the role would be pinged every 15mins. If you want the time between pings to be atleast 1hour, you'd do
```sh
-cooldown 3600000
```
The cooldown command uses Miliseconds for the value given.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/AdamT20054/GasWatch/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/AdamT20054/GasWatch/blob/main/LICENSE.md) for more information.

## Authors

* **Adam O'neill** - *A-level student* - [Adam O'neill](https://github.com/AdamT20054) - *Built program.*

## Acknowledgements

* [Pat](https://github.com/AhsokaT)
