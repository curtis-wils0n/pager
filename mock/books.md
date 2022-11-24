## Books to insert into the DB 

Title: Dune
Year: 1965
Covert_art: Dune_cover.jpeg
Auhtor: Frank Herbert
Publisher: Chilton Books
Genre: Science Fiction

Title: Alita: Battle Angel
Year: 1997
Covert_art: battle-angel.jpeg
Auhtor: Yukito Kishiro
Publisher: Shueisha
Genre: Action

Title: To Kill a Mockingbird
Year: 1960
Covert_art: mockingbird-cover.jpeg
Auhtor: Harper Lee
Publisher: J. B. Lippincott & Co.
Genre: Southern Gothic fiction

Title: The Lord of the Rings
Year: 1954
Covert_art: the-lord-of-the-rings-cover.jpeg
Auhtor: J.R.R. Tolkien
Publisher: Allen & Unwin
Genre: Fantasy fiction

Title: A Game of Thrones
Year: 1996
Covert_art: GOT-cover.jpeg
Auhtor: George R. R. Martin
Publisher: Bantam Spectra 
Genre: Fantasy fiction

Title: The Great Gatsby
Year: 1925
Covert_art: great-gatsby.jpeg
Auhtor: F. Scott Fitzgerald
Publisher: Charles Scribner's Sons
Genre: Fiction

Title: 1984
Year: 1949
Covert_art: 1984.jpeg
Auhtor: George Orwell
Publisher: Secker & Warburg
Genre: Science fiction

Title: Shadow of the Torturer
Year: 1980
Cover_art: shadow-of-torturer.jpeg
Author: Gene Wolfe
Publisher: Simon & Schuster
Genre: Science fiction

Title: House of Suns
Year: 2008
Cover_art: house-of-suns.jpeg
Author: Alastair Reynolds
Publisher: Gollancz
Genre: Science fiction

Title: Hyperion
Year: 1989
Cover_art: hyperior-cover.jpeg
Author: Dan Simmons
Publisher: Doubleday
Genre: Science fiction

## DB seeds

## PUBLISHERS
INSERT INTO publishers (name, location)
VALUES
('Chilton Books', 'Boston, Massachusetts') 1
('Shueisha', 'Tokyo, Japan') 2
('J. B. Lippincott & Co.', 'Philadelphia, Pennsylvania') 3
('Allen & Unwin', 'Sydney, Australia') 4
('Bantam Spectra', 'New York City, New York') 5
('Charles Scribner's Sons', 'New York City, New York') 6
('Secker & Warburg', 'London, England') 7
('Simon & Schuster', 'Manhattan, New York City') 8
('Gollancz', 'London, England') 9
('Doubleday', 'New York City, New York') 10

## AUTHORS
INSERT INTO authors (name, publisher_id)
VALUES
('Frank Herbert', 1) 
('Yukito Kishiro', 2) 
('Harper Lee', 3) 
('J.R.R. Tolkien', 4) 
('George R. R. Martin', 5)
('F. Scott Fitzgerald', 6)
('George Orwell', 7)
('Gene Wolfe', 8)
('Alastair Reynolds', 9)
('Dan Simmons', 10)

## GENRES
INSERT INTO genres (name)
VALUES
('Science Fiction') 1
('Action') 2
('Southern Gothic fiction') 3
('Fantasy fiction') 4
('Fiction') 5

## BOOKS
INSERT INTO books (title, year, cover_art_url, author_id, publisher_id, genre_id)
VALUES
('Dune', '1965', 'Dune_cover.jpeg', 1, 1, 1)
('Alita: Battle Angel', '1997', 'battle-angel.jpeg', 2, 2, 2)
('To Kill a Mockingbird', '1960', 'mockingbird-cover.jpeg', 3, 3, 3)
('The Lord of the Rings, '1954', 'the-lord-of-the-rings-cover.jpeg', 4, 4, 4)
('A Game of Thrones', '1996', 'GOT-cover.jpeg', 5, 5, 4)
('The Great Gatsby', '1925', 'great-gatsby.jpeg', 6, 6, 5)
('1984', '1949', '1984.jpeg', 7, 7, 1)
('Shadow of the Torturer', '1980', 'shadow-of-torturer.jpeg', 8, 8, 1)
('House of Suns', '2008', 'house-of-suns.jpeg', 9, 9, 1)
('Hyperion', '1989', 'hyperior-cover.jpeg', 10, 10, 1)
