type user = {
    // !! BIRTHDAY NEEDS TO BE IN UNIX TIME !!
    name: string;

    age: number;
    birthday: number;
    id: number;
    perm_level: number;

    nsfw: boolean;
}