-- Create Class table

CREATE TABLE
    Class (
        ClassId VARCHAR(10) PRIMARY KEY,
        ClassName VARCHAR(50)
    );

-- Insert data into Class

INSERT INTO
    Class (ClassId, ClassName)
VALUES ('C01', '資料庫結構'), ('C02', '計算機概論'), ('C03', '資訊安全');

-- Create Student table

CREATE TABLE
    Student (
        StudentId VARCHAR(10) PRIMARY KEY,
        StudentName VARCHAR(50)
    );

-- Insert data into Student

INSERT INTO
    Student (StudentId, StudentName)
VALUES ('S01', '張三'), ('S02', '李四'), ('S03', '王五');

-- Create ClassMember table

CREATE TABLE
    ClassMember (
        MemberId VARCHAR(10) PRIMARY KEY,
        ClassId VARCHAR(10),
        StudentId VARCHAR(10),
        RegisteredTime DATE,
        FOREIGN KEY (ClassId) REFERENCES Class(ClassId),
        FOREIGN KEY (StudentId) REFERENCES Student(StudentId)
    );

-- Insert data into ClassMember

INSERT INTO
    ClassMember (
        MemberId,
        ClassId,
        StudentId,
        RegisteredTime
    )
VALUES (
        'M01',
        'C01',
        'S01',
        '2023-07-01'
    ), (
        'M02',
        'C02',
        'S01',
        '2023-07-03'
    ), (
        'M03',
        'C03',
        'S02',
        '2023-06-30'
    ), (
        'M04',
        'C01',
        'S03',
        '2023-07-04'
    ), (
        'M05',
        'C03',
        'S03',
        '2023-06-30'
    ), (
        'M06',
        'C01',
        'S02',
        '2023-07-02'
    ), (
        'M07',
        'C02',
        'S02',
        '2023-07-05'
    );