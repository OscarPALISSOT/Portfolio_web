import TechnoType from "@/types/technoType";

type WorkType = {
    id: number;
    title: string;
    link: string;
    thumbnail: string;
    secondary_thumbnail: string;
    description: string;
    technos: TechnoType[];
}

export default WorkType;