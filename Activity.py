def user_activity_log():
    username = input("Enter username: ")

    cursor.execute("SELECT * FROM employee_activity WHERE username = ?", (username,))
    activity_log = cursor.fetchall()

    if activity_log:
        print("User Activity Log:")
        for log in activity_log:
            print(f"Date: {log[1]}, Activity: {log[2]}")
    else:
        print("No activity log found")
