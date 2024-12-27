# Expense/Income Tracking Website

This project is a comprehensive **Expense/Income Tracking Website** built with Django. It includes features like user authentication, CRUD operations, real-time search, and data visualization with Chart.js.

## Features
- **User Authentication**:
  - User registration with AJAX
  - Login functionality
  - Password reset and recovery
- **Expense and Income Management**:
  - Create, read, update, and delete (CRUD) operations for income/expenses
  - Real-time database search
  - Pagination for data display
- **Admin Panel Customization**:
  - Improved admin interface for managing data
- **Postgres Database**:
  - Fully integrated with PostgreSQL for data storage
- **Data Visualization**:
  - Integrated with Chart.js for interactive charts and graphs
- **JSON Handling**:
  - Work with JSON for efficient data communication

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, AJAX
- **Backend**: Django (Python)
- **Database**: PostgreSQL
- **Libraries**:
  - Chart.js
  - Django ORM
- **Other Tools**:
  - Real-time search implementation
  - Django's built-in admin customization

## Installation

### Prerequisites
- Python 3.x installed on your system
- PostgreSQL installed and running
- Pipenv installed

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/qwerty2053/iewebsite.git
   ```
2. Navigate to the project directory:
   ```bash
   cd iewebsite
   ```
3. Install dependencies using Pipenv:
   ```bash
   pipenv install
   ```
4. Activate the virtual environment:
   ```bash
   pipenv shell
   ```
5. Configure the database:
   - Update the `settings.py` file with your PostgreSQL credentials.
   - Apply migrations:
     ```bash
     python manage.py migrate
     ```
6. Run the development server:
   ```bash
   python manage.py runserver
   ```

### Optional
- To collect static files for production:
  ```bash
  python manage.py collectstatic
  ```

## Usage
1. Register or log in to the platform.
2. Add your income or expenses.
3. Use the real-time search and pagination features to explore your data.
4. Visualize your financial data with dynamic charts.

## Future Enhancements
- Add multi-user support with different roles.
- Add export functionality to download reports in CSV or PDF format.
- Implement more advanced visualizations and analytics.

