export interface FitnessClassDetailModel {
  id: string;
  category: string;
  date: Date;
  time: string;
  remaining: number;
  location: string;
  instructor: string;
  img: string;
}

export interface FitnessCategoryModel {
  [category: string]: {
    title: string;
    description: string;
    img: string;
  };
}
