[![LinkedIn][linkedin-shield]][linkedin-url]

# APEX-DMIT-task

## Features:

**Data Retrieval:**

- Utilized the provided API endpoints to fetch company data.
- Implemented Redux for state management, ensuring data persistence on page refresh.

**Display and Pagination:**

- Rendered the company data in a table with columns for company name, phone, address, city, and status.
- Implemented pagination with 5 companies per page for efficient data presentation.

**Filtering:**

- Integrated filter options for company name and status.
- Dynamically updated the displayed data based on applied filters.

**Debounced Input Handling:**

- Employed a debounce function for smooth handling of filter inputs, enhancing user experience.

**Next.js Integration:**

- Developed the front end using Next.js as per the provided instructions.

## Component Description:

1. `Home` Component

   The `Home` component serves as the main view for displaying company data. It includes filtering options, a table for data presentation, and pagination controls.

2. `CompanyFilterOption` Component

   The `CompanyFilterOption` component provides user interface elements for filtering company data, including a status dropdown and a search input field.

3. `PaginationElement` Component

   The `PaginationElement` component handles pagination controls, displaying information about the current data range and allowing users to navigate between pages.

- Redux Integration:

1. `companySlice` Redux Slice

   The `companySlice` manages the state related to company data, including filter parameters like page, company name, and status.

2. `companyAPI` API Configuration

   The `companyAPI` configuration is created using createApi from @reduxjs/toolkit/query/react. It handles asynchronous queries for fetching company data.

![Home page](/public/homePage.png)

## Installation

To install and run APEX-DMIT-task locally, follow these steps:

Clone the repository

```sh
git clone https://github.com/hossain101199/APEX-DMIT-task.git
```

Change to the project directory

```
cd APEX-DMIT-task
```

Create a .env file with the specified content

```
echo 'NEXT_PUBLIC_API_BASE_URL="Your API base URL"' > .env
```

Install dependencies

```sh
 npm install
```

Start the development server

```sh
npm run dev
```

The application will be accessible on http://localhost:3000.

## Contact

If you have any questions or feedback, feel free to contact me:

- Mohammad Hossain - [Linkedin](https://www.linkedin.com/in/hossain1011/) - fshossain10@gmail.com

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hossain1011/
