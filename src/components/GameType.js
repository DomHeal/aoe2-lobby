export default function GameType({type}) {
        switch (type) {
            case 0:
                return "Random Map";
            case 1:
                return "Regicide";
            case 2:
                return "Deathmatch";
            case 3:
                return "Scenario";
            case 13:
                return "Empire Wars";
            default:
                return type
        }
}
