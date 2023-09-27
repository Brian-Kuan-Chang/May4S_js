SELECT s.StudentName
FROM ClassMember cm
    JOIN Class c ON cm.ClassId = c.ClassId
    JOIN Student s ON cm.StudentId = s.StudentId
WHERE
    c.ClassName = '資料庫結構'
    AND cm.RegisteredTime > '2023-07-01';