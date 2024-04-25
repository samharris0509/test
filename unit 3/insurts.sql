INSERT INTO gm_platforms (type) VALUES ('Console');
INSERT INTO gm_platforms (type) VALUES ('PC');
INSERT INTO gm_platforms (type) VALUES ('Mobile');

INSERT INTO gm_publishers (publisher_name, net_worth, address) VALUES ('Publisher One', 5000000, 'Address One');
INSERT INTO gm_publishers (publisher_name, net_worth, address) VALUES ('Publisher Two', 3000000, 'Address Two');
INSERT INTO gm_publishers (publisher_name, net_worth, address) VALUES ('Publisher Three', 7000000, 'Address Three');


INSERT INTO gm_lead_developers (lead_name, net_worth) VALUES ('LeadDevOne', 200000000);
INSERT INTO gm_lead_developers (lead_name, net_worth) VALUES ('LeadDevTwo', 150000000);
INSERT INTO gm_lead_developers (lead_name, net_worth) VALUES ('LeadDevThree', 300000000);

INSERT INTO gm_developers (developer_name, net_worth, parent_company) VALUES ('Developer One', 100000000, 'LeadDevOne');
INSERT INTO gm_developers (developer_name, net_worth, parent_company) VALUES ('Developer Two', 80000000, 'LeadDevTwo');
INSERT INTO gm_developers (developer_name, net_worth, parent_company) VALUES ('Developer Three', 90000000, 'LeadDevThree');
