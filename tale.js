function kolobok(name) {
    switch(name) {
        case "Дедушка":
            return "Я от дедушки ушел";
        case "Бабушка":
            return "Я от бабушки ушел";
        case "Заяц":
            return "Я от зайца ушел";
        case "Волк":
            return "Я от волка ушел";
        case "Медведь":
            return "Я от медведя ушел";
        case "Лиса":
            return "Меня съели";            
    
    default:
                return "Муки бабка не нашла";
            }

}

function newYear(name) {
    const a = "!";
    const b = " ";
    const c = ` " `;

    
     console.log(`${c}`+`${name}`+`${a}`+`${b}``${c}`+`${name}`+`${a}`+`${b}``${c}`+`${name}`+`${a}`+`${b}`);
    
    
}