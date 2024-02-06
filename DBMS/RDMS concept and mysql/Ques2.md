# Ques 2: Database Normalization Practice

Apply Normalization on the below table and return the list of tables after 1NF, 2NF, 3NF, 4NF, 5NF

| Employee ID | Employee Name | Department | Project ID | Project Name | Start Date | End Date   | Salary |
| ----------- | ------------- | ---------- | ---------- | ------------ | ---------- | ---------- | ------ |
| 101         | John Doe      | HR         | 001        | Project A    | 2023-01-15 | 2023-06-30 | 5000   |
| 101         | John Doe      | HR         | 002        | Project B    | 2023-04-01 | 2023-08-31 | 5200   |
| 102         | Jane Smith    | Marketing  | 001        | Project A    | 2023-02-01 | 2023-05-31 | 5500   |
| 103         | Mike Johnson  | IT         | 002        | Project B    | 2023-03-10 | 2023-08-15 | 6000   |
| 103         | Mike Johnson  | IT         | 003        | Project C    | 2023-06-15 | 2023-11-30 | 6200   |
| 104         | Sarah Brown   | HR         | 002        | Project B    | 2023-04-20 | 2023-07-31 | 4800   |
| 105         | Robert Lee    | Finance    | 001        | Project A    | 2023-05-05 | 2023-09-30 | 5200   |
| 106         | Lisa Wang     | IT         | 001        | Project A    | 2023-06-01 | 2023-12-31 | 5800   |

---

## Answer:

### 1NF: Atomic values: already in 1NF

### 2NF,3NF:

## Emp id and proejct id make primary key

### Employee table:

| Employee ID | Employee Name | Department |
| ----------- | ------------- | ---------- |
| 101         | John Doe      | HR         |
| 102         | Jane Smith    | Marketing  |
| 103         | Mike Johnson  | IT         |
| 104         | Sarah Brown   | HR         |
| 105         | Robert Lee    | Finance    |
| 106         | Lisa Wang     | IT         |

### Project table:

| Project ID | Project Name |
| ---------- | ------------ |
| 001        | Project A    |
| 002        | Project B    |
| 003        | Project C    |

### Employee Project table

| Employee ID | Project ID | Start Date | End Date   | Salary |
| ----------- | ---------- | ---------- | ---------- | ------ |
| 101         | 001        | 2023-01-15 | 2023-06-30 | 5000   |
| 101         | 002        | 2023-04-01 | 2023-08-31 | 5200   |
| 102         | 001        | 2023-02-01 | 2023-05-31 | 5500   |
| 103         | 002        | 2023-03-10 | 2023-08-15 | 6000   |
| 103         | 003        | 2023-06-15 | 2023-11-30 | 6200   |
| 104         | 002        | 2023-04-20 | 2023-07-31 | 4800   |
| 105         | 001        | 2023-05-05 | 2023-09-30 | 5200   |
| 106         | 001        | 2023-06-01 | 2023-12-31 | 5800   |

---

Question 3: What are the primary keys and foreign keys in a relational database, and how do they establish relationships between tables?

### In a relational database, a primary key uniquely identifies each record in a table. A foreign key, on the other hand, establishes a link between two tables by referencing the primary key of another table. This relationship between tables is known as referential integrity.

---

Question 4: Explain the ACID properties in the context of database transactions.

### ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure that database transactions are reliable and maintain data integrity. Atomicity ensures that a transaction is treated as a single unit, Consistency ensures that the database remains in a consistent state before and after the transaction, Isolation ensures that transactions are executed independently without interference, and Durability ensures that the changes made by a committed transaction are permanently saved, even in the event of a system failure.

---

Question 5: Describe the concept of indexing in a database. How does indexing improve query performance?

### Indexing in a database is a data structure that improves the speed of data retrieval operations on a table. It works by creating an ordered list of key values, allowing the database to quickly locate the desired records. Indexing improves query performance by reducing the number of disk I/O operations required to fetch data, especially for large tables, as it enables the database to efficiently locate the records based on the indexed columns.

---

Question 6: Explain the concept of concurrency control, deadlocks in a multi-user database environment.

### Concurrency control is the management of simultaneous access to shared resources in a multi-user database environment to ensure data consistency and integrity. It involves techniques such as locking, timestamping, and optimistic concurrency control to prevent conflicts between concurrent transactions. Deadlocks occur when two or more transactions are waiting indefinitely for each other to release locks on resources, resulting in a deadlock situation where none of the transactions can proceed.

---

Question 7: Read about Database sharding and explain a couple of real-time examples where, why, how this concept is used.

### Database sharding is a technique used to horizontally partition data across multiple database instances, known as shards, to distribute the workload and improve scalability and performance. Sharding is commonly used in large-scale distributed databases, particularly in cloud environments, social media platforms, and e-commerce applications.

Examples:

Social Media Platforms: Social media platforms like Facebook and Twitter generate massive amounts of data from millions of users worldwide. Sharding allows them to distribute user data across multiple database shards based on geographic regions or user IDs, enabling efficient data storage and retrieval while maintaining high availability and scalability.

E-commerce Applications: E-commerce websites such as Amazon and eBay handle a large volume of transactions and product data. Sharding helps them partition product catalogs, user profiles, and transaction records across multiple database shards, ensuring optimal performance and scalability during peak usage periods, such as holiday seasons or flash sales.
