[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=bren96_map-lab&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=bren96_map-lab)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=bren96_map-lab&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=bren96_map-lab)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=bren96_map-lab&metric=bugs)](https://sonarcloud.io/summary/new_code?id=bren96_map-lab)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=bren96_map-lab&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=bren96_map-lab)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=bren96_map-lab&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=bren96_map-lab)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=bren96_map-lab&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=bren96_map-lab)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=bren96_map-lab&metric=coverage)](https://sonarcloud.io/summary/new_code?id=bren96_map-lab)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=bren96_map-lab&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=bren96_map-lab)

# Map-lab

This monorepo contains the open-source projets developed for [Map-lab](https://Map-lab.info/), a web-based collaborative mapping platform. Use Map-lab to create, edit, and share maps and data with others in real-time.

## Development Setup

Map-lab uses the [Nx](https://nx.dev) build system.

If using VSCode or any editor that supports the [Development Container Open Specification](https://containers.dev/supporting), a containerized workspace is available to ensure a consistent development environment. The development container is optional, but [provides many benefits](https://containers.dev/overview) to developers and maintainers.

To use the development container, refer to your specific editor/extension's instructions. The container spec is located at:

`./devcontainer/devcontainer.json`

To install all required packages, run:

`npm install`

Note: Each app or library may have specific setup requirements.

## Usage

See the `./Makefile` for common monorepo commands and maintenance tasks.

Note: Specific project documentation is located in each app or library directory.

## Contributing

Map-lab is maintained by MAP-LAB, LLC.

We welcome feature requests, bug reports, and pull requests from the community.

Take a look at open issues to see if there are bugs or features you are interested in working on.

If you have any questions, feel free to open an issue, and a contributor will follow up as soon as possible.

## License

This project is under a MIT License. See `./LICENSE` for details.
