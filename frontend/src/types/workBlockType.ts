import WorkType from "@/types/workType";

type WorkBlockType = {
    link: string;
    title: string;
    description: string;
    cv: string;
    works: WorkType[];
}

export const defaultWorkBlock = {
    link: '',
    title: '',
    description: '',
    cv: '',
    works: [],
} satisfies WorkBlockType;

export default WorkBlockType;