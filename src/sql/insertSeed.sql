BEGIN TRANSACTION;

-- Insert Character Data
INSERT INTO character ("firstName", "lastName", "species", "age") VALUES ('Doraemon', NULL, 'Robot Cat', -91);
INSERT INTO character ("firstName", "lastName", "species", "age") VALUES ('Nobita', 'Nobi', 'Human', 10);
INSERT INTO character ("firstName", "lastName", "species", "age") VALUES ('Dorami', NULL, 'Robot Cat', -94);
INSERT INTO character ("firstName", "lastName", "species", "age") VALUES ('Kuruto', 'Hartman', 'Human', 10);
INSERT INTO character ("firstName", "lastName", "species", "age") VALUES ('Suneo', 'Honekawa', 'Human', 10);
INSERT INTO character ("firstName", "lastName", "species", "age") VALUES ('Takeshi', 'Goda', 'Human', 10);
INSERT INTO character ("firstName", "lastName", "species", "age") VALUES ('Shizuka', 'Minamoto', 'Human', 10);  

-- Insert gadget Data
INSERT INTO gadget ("gadgetName", "gadgetType", "ownerId") VALUES ('Big Light', 'Laser', 1);
INSERT INTO gadget ("gadgetName", "gadgetType", "ownerId") VALUES ('Time Machine', 'Hovercraft', 1);
INSERT INTO gadget ("gadgetName", "gadgetType", "ownerId") VALUES ('Take-Copter', 'Mini-Helicopter', 3);
INSERT INTO gadget ("gadgetName", "gadgetType", "ownerId") VALUES ('Anywhere Door', 'Door', 1);
INSERT INTO gadget ("gadgetName", "gadgetType", "ownerId") VALUES ('Gravity Paint', 'Paint', 1);

-- Insert gadget_character data
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (2,1);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (3,3);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (4,1);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (5,1);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (1,1);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (1,4);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (1,2);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (1,5);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (1,3);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (1,6);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (2,2);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (2,3);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (2,4);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (2,5);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (2,6);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (2,7);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (3,1);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (3,2);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (3,4);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (3,5);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (3,6);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (3,7);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (4,2);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (4,3);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (4,4);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (4,5);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (4,6);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (4,7);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (5,2);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (5,5);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (5,6);
INSERT INTO gadget_characters_character ("gadgetId", "characterId") VALUES (5,7);


COMMIT;