import { fontPercent } from "@/helpers/functions/responsive"
export interface iconSizesInterface{
    XS :number,
    SM :number,
    BASE :number,
    MD :number,
    LG :number,
    XL :number,
    XL2 :number,
    XL3 :number,
    XL4 :number,
    XL5 :number,
    XL6 :number,
    XL7 :number,
    XL8 :number,
    XL9 :number,
    XL10 :number,
}
const iconSizes:iconSizesInterface = {
    XS : fontPercent(1),
    SM : fontPercent(2),
    BASE : fontPercent(3),
    MD : fontPercent(3.5),
    LG : fontPercent(4),
    XL : fontPercent(5),
    XL2 : fontPercent(6),
    XL3 : fontPercent(7),
    XL4 : fontPercent(8),
    XL5 : fontPercent(9),
    XL6 : fontPercent(10),
    XL7 : fontPercent(11),
    XL8 : fontPercent(12),
    XL9 : fontPercent(13),
    XL10 : fontPercent(14),
}
export default iconSizes