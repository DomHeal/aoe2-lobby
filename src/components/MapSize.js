
export default function MapSize({ size }) {
    switch (size) {
        case 0:
            return "Tiny";
        case 1:
            return "Small";
        case 2:
            return "Medium";
        case 3:
            return "Normal";
        case 4:
            return "Large";
        case 5:
            return "Giant";
        case 6:
            return "Luda";
        default:
            return size
    }
}
