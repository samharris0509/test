INSERT INTO gm_platforms (type) VALUES ('Console');
INSERT INTO gm_platforms (type) VALUES ('PC');
INSERT INTO gm_platforms (type) VALUES ('Mobile');

INSERT INTO gm_publishers (publisher_name, net_worth, address) VALUES ('Publisher One', 5000000, 'Address One');
INSERT INTO gm_publishers (publisher_name, net_worth, address) VALUES ('Publisher Two', 3000000, 'Address Two');
INSERT INTO gm_publishers (publisher_name, net_worth, address) VALUES ('Publisher Three', 7000000, 'Address Three');
INSERT INTO gm_publishers (publisher_name, net_worth, address) 
VALUES ('PlayNet', 2000000, 'address 5');




INSERT INTO gm_developers (developer_name, net_worth) VALUES ('GameStudios', 1000000);
INSERT INTO gm_developers (developer_name, net_worth) VALUES ('DevMagic', 1500000);
INSERT INTO gm_developers (developer_name, net_worth) VALUES ('CodeCraft', 1200000);

INSERT INTO gm_employees (employee_id, salary, employer) VALUES (12345, 50000.0000, 'GameStudios');
INSERT INTO gm_employees (employee_id, salary, employer) VALUES (12346, 55000.0000, 'DevMagic');
INSERT INTO gm_employees (employee_id, salary, employer) VALUES (12347, 53000.0000, 'CodeCraft');


INSERT INTO gm_ips (ip_name, owner_d, owner_p) VALUES ('FantasyQuest', 'GameStudios', NULL);
INSERT INTO gm_ips (ip_name, owner_d, owner_p) VALUES ('SpaceOdyssey', 'CodeCraft', NULL);
INSERT INTO gm_ips (ip_name, owner_d, owner_p) VALUES ('MysteryIsland', 'DevMagic', NULL);

INSERT INTO gm_games (
  game_title, 
  genre, 
  sales, 
  production_start, 
  release_date, 
  cost_to_produce, 
  average_rating, 
  ip, 
  developer, 
  lead_developer
) VALUES (
  'Galactic Journey', 
  'Sci-Fi', 
  800000, 
  TO_DATE('2016-05-10', 'YYYY-MM-DD'), 
  TO_DATE('2018-11-15', 'YYYY-MM-DD'), 
  30000000, 
  85, 
  'SpaceOdyssey', 
  'CodeCraft', 
  NULL
);

INSERT INTO gm_games (
  game_title, 
  genre, 
  sales, 
  production_start, 
  release_date, 
  cost_to_produce, 
  average_rating, 
  ip, 
  developer, 
  lead_developer
) VALUES (
  'Adventure Quest', 
  'Adventure', 
  500000, 
  TO_DATE('2015-01-01', 'YYYY-MM-DD'), 
  TO_DATE('2017-12-01', 'YYYY-MM-DD'), 
  20000000, 
  80, 
  'FantasyQuest', 
  'GameStudios', 
  NULL
);


INSERT INTO gm_games (
  game_title, 
  genre, 
  sales, 
  production_start, 
  release_date, 
  cost_to_produce, 
  average_rating, 
  ip, 
  developer, 
  lead_developer
) VALUES (
  'Island Mystery', 
  'Puzzle', 
  300000, 
  TO_DATE('2017-03-20', 'YYYY-MM-DD'), 
  TO_DATE('2019-08-24', 'YYYY-MM-DD'), 
  15000000, 
  75, 
  'MysteryIsland', 
  'DevMagic', 
  NULL
);

INSERT INTO gm_versions (title, platform, game) 
VALUES ('Galactic Journey Console', 'Console', 'Galactic Journey');
INSERT INTO gm_versions (title, platform, game) 
VALUES ('Adventure Quest PC', 'PC', 'Adventure Quest');
INSERT INTO gm_versions (title, platform, game) 
VALUES ('Island Mystery Mobile Version', 'Mobile', 'Island Mystery');


INSERT INTO gm_updates (update_code, date_released, game) 
VALUES ('GJ-Update-001', TO_DATE('2024-01-01', 'YYYY-MM-DD'), 'Galactic Journey');

INSERT INTO gm_updates (update_code, date_released, game) 
VALUES ('AQ-Update-001', TO_DATE('2024-01-15', 'YYYY-MM-DD'), 'Adventure Quest');

INSERT INTO gm_updates (update_code, date_released, game) 
VALUES ('IM-Update-001', TO_DATE('2024-02-01', 'YYYY-MM-DD'), 'Island Mystery');



INSERT INTO gm_dlcs (
  title, 
  sales, 
  release_date, 
  average_rating, 
  production_cost, 
  production_start, 
  game, 
  update_code
) VALUES (
  'Galactic Journey: Expansion One', 
  100000, 
  TO_DATE('2024-03-01', 'YYYY-MM-DD'), 
  85, 
  5000000, 
  TO_DATE('2023-10-01', 'YYYY-MM-DD'), 
  'Galactic Journey', 
  'GJ-Update-001'
);

INSERT INTO gm_dlcs (
  title, 
  sales, 
  release_date, 
  average_rating, 
  production_cost, 
  production_start, 
  game, 
  update_code
) VALUES (
  'Adventure Quest: Hidden Realms', 
  80000, 
  TO_DATE('2024-04-01', 'YYYY-MM-DD'), 
  88, 
  3000000, 
  TO_DATE('2023-11-01', 'YYYY-MM-DD'), 
  'Adventure Quest', 
  'AQ-Update-001'
);

INSERT INTO gm_dlcs (
  title, 
  sales, 
  release_date, 
  average_rating, 
  production_cost, 
  production_start, 
  game, 
  update_code
) VALUES (
  'Island Mystery: The Secret Shore', 
  50000, 
  TO_DATE('2024-05-01', 'YYYY-MM-DD'), 
  80, 
  2000000, 
  TO_DATE('2023-12-01', 'YYYY-MM-DD'), 
  'Island Mystery', 
  'IM-Update-001'
);

INSERT INTO gm_players (email, name, age, race) 
VALUES ('player1@example.com', 'Alice Smith', 25, 'Human');

INSERT INTO gm_players (email, name, age, race) 
VALUES ('player2@example.com', 'Bob Johnson', 32, 'Elf');

INSERT INTO gm_players (email, name, age, race) 
VALUES ('player3@example.com', 'Carol Williams', 28, 'Orc');

INSERT INTO gm_accounts (id, password, username, owner, game) 
VALUES (1, 'password123', 'GalacticExplorer', 'player1@example.com', 'Galactic Journey');

INSERT INTO gm_accounts (id, password, username, owner, game) 
VALUES (2, 'questpassword', 'QuestMaster', 'player2@example.com', 'Adventure Quest');

INSERT INTO gm_accounts (id, password, username, owner, game) 
VALUES (3, 'mysterysolver', 'MysteryHunter', 'player3@example.com', 'Island Mystery');


INSERT INTO gm_ips (ip_name, owner_d, owner_p) ​

VALUES ('Demeo', 'DevMagic', NULL);







