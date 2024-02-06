# Question 1: Normalization

Consider the following unnormalized table for a bookstore database:

| Book ID | Title                 | Author              | Genre   | Publisher     | ISBN           | Price |
| ------- | --------------------- | ------------------- | ------- | ------------- | -------------- | ----- |
| 101     | To Kill a Mockingbird | Harper Lee          | Fiction | HarperCollins | 978-0061120084 | 10.99 |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction | Scribner      | 978-0743273565 | 12.50 |
| 103     | Principles of Physics | Jearl Walker        | Science | Wiley         | 978-0321976444 | 50.00 |

Normalize the table to 1NF, 2NF, and 3NF, explaining the steps you took at each normalization level.

### Answers:

## 1NF, 2NF, 3NF:

Since all rows contains atomic values, already in 1NF, and since no partial dependecy is given, therefore its also in 2NF, not transitive dependency given,already in 3NF:

| Book ID | Title                 | Author              | Genre   | Publisher     | ISBN           | Price |
| ------- | --------------------- | ------------------- | ------- | ------------- | -------------- | ----- |
| 101     | To Kill a Mockingbird | Harper Lee          | Fiction | HarperCollins | 978-0061120084 | 10.99 |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction | Scribner      | 978-0743273565 | 12.50 |
| 103     | Principles of Physics | Jearl Walker        | Science | Wiley         | 978-0321976444 | 50.00 |
