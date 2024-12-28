import WorkType from "@/types/workType";

type WorkBlockType = {
    link: string;
    title: string;
    description: string;
    cv: string;
    works: WorkType[];
}

export default WorkBlockType;