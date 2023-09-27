SELECT
    c.ClassName,
    s.StudentName,
    cm.RegisteredTime
FROM ClassMember cm
    JOIN Class c ON cm.ClassId = c.ClassId
    JOIN Student s ON cm.StudentId = s.StudentId
ORDER BY cm.RegisteredTime;