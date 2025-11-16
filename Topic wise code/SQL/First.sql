use new_schema;
-- create table University(
-- Name varchar(30),
-- id bigint
-- );
-- insert into University values ("Nilesh",123),("Tejas",234);
-- rename table University to Uni;
-- select * from Uni;

CREATE TABLE Books (
    BookID INT PRIMARY KEY,  
    Title VARCHAR(255) NOT NULL,
    ISBN VARCHAR(20) UNIQUE,
    PublicationYear INT
);
CREATE TABLE Members (
    MemberID INT PRIMARY KEY, 
    MemberName VARCHAR(255) NOT NULL,
    JoinDate DATE
);
CREATE TABLE Loans (
    LoanID INT PRIMARY KEY,  -- Primary key for unique identification
    BookID INT,
    MemberID INT,
    LoanDate DATE,
    ReturnDate DATE,
    FOREIGN KEY (BookID) REFERENCES Books(BookID),  -- Foreign key referencing Books
    FOREIGN KEY (MemberID) REFERENCES Members(MemberID)  -- Foreign key referencing Members
);
INSERT INTO Books (BookID, Title, ISBN, PublicationYear) VALUES
(1, 'The Great Gatsby', '978-0743273565', 1925),
(2, 'A Brief History of Time', '978-0553109535', 1988),
(3, 'Pride and Prejudice', '978-0141439518', 1813);

-- Insert data into Members
INSERT INTO Members (MemberID, MemberName, JoinDate) VALUES
(1, 'Alice Johnson', '2023-01-15'),
(2, 'Bob Williams', '2023-02-20');

-- Insert data into Loans
INSERT INTO Loans (LoanID, BookID, MemberID, LoanDate, ReturnDate) VALUES
(1, 1, 1, '2023-03-01', '2023-03-15'),
(2, 2, 2, '2023-03-05', '2023-03-20');

ALTER TABLE Books
ADD Genre VARCHAR(50);

-- Update Genre values
UPDATE Books
SET Genre = 'Fiction'
WHERE BookID IN (1, 3);

UPDATE Books
SET Genre = 'Science'
WHERE BookID = 2;

-- Verify the data
SELECT * FROM Books;
SELECT * FROM Members;
SELECT * FROM Loans;
create table img(
id int,
pic blob
);
insert into img values (1,load_file("C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Screenshot (57).png"));
select * from img;