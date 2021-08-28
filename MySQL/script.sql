create table shops
(
    id        int auto_increment,
    name      varchar(255)                       null,
    brand     varchar(255)                       null,
    validity  date                               null,
    amount    int                                null,
    createdAt datetime default CURRENT_TIMESTAMP null,
    updatedAt datetime default CURRENT_TIMESTAMP null,
    constraint shops_id_uindex
        unique (id)
);

alter table shops
    add primary key (id);

INSERT INTO shops
     (name,
     brand,
     validity,
     amount,
     createdAt,
     updatedAt) VALUES ( 'Café',
                         '3 Corações',
                         '2022-05-05',
                         5,
                         '2021-08-28 13:03:19',
                         '2021-08-28 13:05:47');