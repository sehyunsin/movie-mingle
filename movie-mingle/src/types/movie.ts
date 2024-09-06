export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    // 필요한 다른 속성들도 여기에 추가
  }
  
  export interface Genre {
    id: number;
    name: string;
  }
  
  export interface MovieDetail extends Movie {
    genres: Genre[];
    release_date: string;
    runtime: number;
    vote_average: number;
    overview: string;
    // 추가로 필요한 상세 정보 속성들
  }