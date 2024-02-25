-- 1
SELECT ITEMNO, DESCRIPTION, WEIGHT
FROM ITEMS
WHERE WEIGHT = (SELECT MIN(WEIGHT) FROM ITEMS);

-- 2
SELECT DISTINCT WID, WNAME, LOCATION
FROM WAREHOUSES
WHERE LOCATION = 'Pune';

-- 3
SELECT I.ITEMNO, I.DESCRIPTION, OI.ORDERED_QUANTITY
FROM CUSTOMER C
JOIN ORDERS O ON C.CNO = O.CNO
JOIN ORDER_ITEMS OI ON O.ONO = OI.ONO
JOIN ITEMS I ON OI.ITEMNO = I.ITEMNO
WHERE C.CNAME = 'Mr. Patil';

-- 4
SELECT W.WID, W.WNAME, W.LOCATION, COUNT(S.SID) AS STORE_COUNT
FROM WAREHOUSES W
JOIN STORES S ON W.WID = S.WID
GROUP BY W.WID, W.WNAME, W.LOCATION
ORDER BY STORE_COUNT DESC
LIMIT 1;

-- 5
SELECT ITEMNO, DESCRIPTION
FROM ITEMS
WHERE ITEMNO = (
    SELECT ITEMNO
    FROM ORDER_ITEMS
    GROUP BY ITEMNO
    ORDER BY COUNT(ONO)
    LIMIT 1
);

-- 6
SELECT C.CNO, C.CNAME, O.ONO, O.ODATE, I.ITEMNO, I.DESCRIPTION, OI.ORDERED_QUANTITY
FROM CUSTOMER C
JOIN ORDERS O ON C.CNO = O.CNO
JOIN ORDER_ITEMS OI ON O.ONO = OI.ONO
JOIN ITEMS I ON OI.ITEMNO = I.ITEMNO;


-- Insertion assignment

-- Insert sample data into CITIES table
INSERT INTO CITIES (CITY, STATE) VALUES
('Pune', 'Maharashtra'),
('Mumbai', 'Maharashtra'),
('Delhi', 'Delhi'),
('Bangalore', 'Karnataka'),
('Chennai', 'Tamil Nadu');

-- Insert sample data into WAREHOUSES table
INSERT INTO WAREHOUSES (WID, WNAME, LOCATION, EXTRA) VALUES
(1, 'Warehouse A', 'Pune', '{"capacity": 1000}'),
(2, 'Warehouse B', 'Mumbai', '{"capacity": 800}'),
(3, 'Warehouse C', 'Delhi', '{"capacity": 1200}'),
(4, 'Warehouse D', 'Bangalore', '{"capacity": 900}');

-- Insert sample data into STORES table
INSERT INTO STORES (SID, STORE_NAME, LOCATION_CITY) VALUES
(1, 'Store 1', 'Pune'),
(2, 'Store 2', 'Mumbai'),
(3, 'Store 3', 'Pune'),
(4, 'Store 4', 'Delhi');

ALTER TABLE STORES
ADD COLUMN WID INTEGER,
ADD CONSTRAINT fk_warehouse_id
FOREIGN KEY (WID) REFERENCES WAREHOUSES(WID);


UPDATE STORES
SET WID = 
  CASE STORE_NAME
    WHEN 'Store 1' THEN 1  -- Warehouse A (Pune)
    WHEN 'Store 2' THEN 2  -- Warehouse B (Mumbai)
    WHEN 'Store 3' THEN 1  -- Warehouse A (Pune)
    WHEN 'Store 4' THEN 3  -- Warehouse C (Delhi)
    END;

-- Insert sample data into CUSTOMER table
INSERT INTO CUSTOMER (CNO, CNAME, ADDR, CU_CITY) VALUES
(101, 'Mr. Patil', '123 Main St', 'Pune'),
(102, 'Mrs. Sharma', '456 Central Ave', 'Mumbai'),
(103, 'Mr. Singh', '789 1st Street', 'Delhi'),
(104, 'Ms. Gupta', '101 Second Road', 'Bangalore'),
(105, 'Mr. Kumar', '456 Third Avenue', 'Chennai');

-- Insert sample data into ORDERS table
INSERT INTO ORDERS (ONO, ODATE) VALUES
(1, '2023-06-15'),
(2, '2023-06-16'),
(3, '2023-06-17'),
(4, '2023-06-18'),
(5, '2023-06-19');

UPDATE ORDERS
SET CNO = 
  CASE ONO
    WHEN 1 THEN 101  -- Mr. Patil
    WHEN 2 THEN 102  -- Mrs. Sharma
    WHEN 3 THEN 103  -- Mr. Singh
    WHEN 4 THEN 104  -- Ms. Gupta
    WHEN 5 THEN 105  -- Mr. Kumar
  END
WHERE ONO IN (1, 2, 3, 4, 5);

-- Insert sample data into ITEMS table
INSERT INTO ITEMS (ITEMNO, DESCRIPTION, WEIGHT, COST) VALUES
(101, 'Laptop', 2.5, 1200.50),
(102, 'Smartphone', 0.5, 800.00),
(103, 'TV', 15.0, 1000.00),
(104, 'Microwave Oven', 10.0, 500.00),
(105, 'Refrigerator', 25.0, 1500.00),
(106, 'Washing Machine', 30.0, 1800.00);

-- Sample Data for ORDER_ITEMS table
INSERT INTO ORDER_ITEMS (ONO, ITEMNO, ORDERED_QUANTITY) VALUES
(1, 101, 2),  -- Order 1: 2 laptops
(2, 102, 3),  -- Order 2: 3 smartphones
(3, 103, 1),  -- Order 3: 1 TV
(4, 104, 2),  -- Order 4: 2 microwave ovens
(5, 105, 1);  -- Order 5: 1 refrigerator

-- Sample Data for STORE_ITEMS table
INSERT INTO STORE_ITEMS (SID, ITEMNO, QUANTITY) VALUES
(1, 101, 10),  -- Store 1: 10 laptops
(1, 102, 5),   -- Store 1: 5 smartphones
(2, 103, 8),   -- Store 2: 8 TVs
(2, 104, 3),   -- Store 2: 3 microwave ovens
(3, 105, 4),   -- Store 3: 4 refrigerators
(4, 106, 6);   -- Store 4: 6 washing machines
