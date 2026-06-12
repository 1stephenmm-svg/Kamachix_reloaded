# KAMACHIX

KAMACHIX is an academic analytics dashboard developed at the University of Nariño to support the visualization, monitoring, and management of institutional academic indicators.

Originally created by a team of Systems Engineering students within a university research initiative, the platform was later deployed within the university infrastructure and used by institutional stakeholders to support academic quality monitoring, accreditation processes, and institutional decision-making.

The original deployment is no longer available. This repository is maintained for portfolio, documentation, educational, and historical preservation purposes.

---

## Project Overview

KAMACHIX is a web-based dashboard that centralizes the management and visualization of academic and institutional indicators.

The platform provides data visualization, CSV-based data import workflows, reporting support, email notifications, and monitoring tools for academic quality and accreditation-related processes.

Based on the preserved source code and project assets, the system includes indicators related to:

* Student satisfaction levels.
* Academic dropout by cohort.
* Academic dropout by academic period.
* Accreditation status of academic programs.
* Teacher education and qualification levels.
* Student-to-teacher ratios.
* Full-time versus hourly lecturer distribution.
* Improvement-plan monitoring and accreditation follow-up activities.

The platform was deployed within the University of Nariño infrastructure and remained in active institutional use for at least one year during the project lifecycle.

---

## Impact

KAMACHIX contributed to the centralization and visualization of institutional academic indicators used in academic quality and accreditation processes.

The platform replaced fragmented reporting workflows and provided a centralized environment for monitoring key academic metrics used by university stakeholders.

---

## Business Context

Universities frequently manage academic indicators through spreadsheets, departmental reports, and disconnected data sources.

KAMACHIX was developed to provide a centralized platform where institutional stakeholders could:

* Monitor academic quality indicators.
* Review accreditation-related information.
* Track improvement plans.
* Visualize historical indicator trends.
* Maintain indicator datasets through controlled upload workflows.

Target users included:

* Academic administrators.
* Program coordinators.
* Quality assurance personnel.
* Accreditation teams.
* Institutional planning and management stakeholders.

---

## Features

The following capabilities are present in the preserved source code and project assets:

* Academic indicator dashboard.
* Server-rendered web application.
* Interactive KPI visualization.
* Filtering and exploration of indicator data.
* CSV-based data import workflows.
* PostgreSQL-backed persistence layer.
* User authentication and session management.
* Password recovery through email.
* Automated email notifications.
* Accreditation and improvement-plan follow-up workflows.
* Reporting support and data export capabilities.
* User documentation and training materials.

---

## Architecture Overview

KAMACHIX is a monolithic web application built using Node.js and Express.

### High-Level Architecture

* Express.js backend application.
* Jade (Pug predecessor) server-rendered views.
* PostgreSQL relational database.
* JavaScript and jQuery-based client-side interactions.
* CSV import workflows.
* Email notification services.
* Reporting integrations.
* Static assets and institutional documentation.

### Main Components

#### Application Layer

* `app.js`
* `bin/www`

Responsible for application initialization, middleware configuration, routing, sessions, and static content delivery.

#### Business and Data Layer

* `routes/`

Contains business workflows, indicator queries, updates, authentication flows, upload operations, and notification logic.

#### Presentation Layer

* `views/`

Contains Jade templates used to render dashboards and administrative interfaces.

#### Frontend Assets

* `public/`

Contains JavaScript, CSS, images, manuals, templates, and demonstration assets.

#### Configuration Layer

* `config/`

Contains database, email, and upload configuration utilities.

#### Data Preservation Layer

* `files/`

Contains PostgreSQL dumps and preserved project artifacts.

---

## Project Structure

```text
.
├── app.js                 # Express application configuration
├── bin/                   # Server bootstrap
├── config/                # Database, email and upload configuration
├── files/                 # Database dumps and preserved artifacts
├── public/                # Frontend assets, manuals and templates
├── routes/                # Business logic and application routes
├── views/                 # Jade templates
├── package.json
└── README.md
```

---

## Technology Stack

### Backend

* Node.js
* Express.js
* PostgreSQL
* Nodemailer
* Express Session
* Express File Upload
* Morgan
* Compression Middleware

### Frontend

* JavaScript
* jQuery
* Bootstrap 3
* Jade Templates
* amCharts
* Summernote
* jsreport Browser Client

### Database

* PostgreSQL
* PL/pgSQL Functions
* Triggers
* Stored Procedures
* SQL Dumps

---

## Installation

This repository is preserved primarily for historical, educational, and portfolio purposes.

### Prerequisites

* Node.js
* npm
* PostgreSQL

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm start
```

The original application uses:

```bash
supervisor ./bin/www
```

You may also specify a custom port:

```bash
PORT=3000 npm start
```

---

## Configuration

Configuration files are located under:

```text
config/
```

Important configuration modules:

```text
config/dbConfig.js
config/emailconfig.js
config/fileupload.js
```

The original deployment relied on institutional database and email infrastructure.

Before any redeployment, all credentials, secrets, and environment-specific settings should be reviewed and replaced using modern environment-variable-based configuration.

---

## Documentation

The repository preserves historical project assets, including:

* User manuals.
* Demonstration and training videos.
* CSV upload templates.
* Database snapshots.

---

## Preserved Assets

The repository includes historical project artifacts that provide evidence of real-world institutional deployment and operational use.

Preserved assets include:

* User manual.
* Demonstration and training video.
* CSV import templates.
* Database snapshots and SQL dumps.

These materials were used during the operational lifecycle of the platform and have been preserved for documentation, educational, and historical purposes.

---

## Historical Deployment

KAMACHIX was deployed within the University of Nariño infrastructure and operated in a real institutional environment.

Although the original deployment is no longer available, the source code, database artifacts, user documentation, and demonstration materials have been preserved.

This repository serves as a historical record of the project and as a portfolio artifact documenting the system's design, implementation, and institutional use.

---

## Contributors

Original project developed collaboratively by Systems Engineering students from the University of Nariño:

- Lucio Stephen Molina Martínez
- Juan Gabriel Bastidas Delgado
- Oscar Algemiro Erazo Carlosama

## Repository Maintenance

This repository is currently maintained by Lucio Stephen Molina Martínez for portfolio, documentation, educational, and historical preservation purposes.

Current maintenance activities include:

- Repository preservation.
- Documentation improvements.
- Historical project recovery.
- Portfolio preparation.
- Technical analysis and modernization planning.

---

## Credits

This project originated within a university research initiative at the University of Nariño and was developed under academic supervision as part of a software engineering and research effort.

The platform was subsequently deployed within the University of Nariño infrastructure and used as an institutional dashboard supporting academic quality and accreditation-related processes.

---

## Future Modernization Opportunities

Potential modernization efforts include:

* Upgrade Node.js and Express dependencies.
* Replace Jade with modern Pug templates.
* Externalize secrets and credentials.
* Introduce Docker and Docker Compose.
* Add automated testing.
* Implement CI/CD pipelines.
* Improve authentication and authorization mechanisms.
* Modernize reporting and visualization libraries.
* Improve CSV validation and error handling.
* Introduce database migration tooling.
* Add security hardening and dependency auditing.

---

## Repository Status

This repository is maintained as:

* A portfolio project.
* A historical software artifact.
* Technical documentation.
* A modernization case study.

It should be considered a preserved institutional software project rather than an actively maintained production system.
