CREATE TABLE todo_item (
    id INT NOT NULL AUTO_INCREMENT,
    task_name VARCHAR(100) NOT NULL,
    user_id VARCHAR(20) NOT NULL,
    expire_date DATE NOT NULL,
    finished_date DATE,
    PRIMARY KEY (id)
);
