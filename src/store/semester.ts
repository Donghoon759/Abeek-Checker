let autoId = 0;

export type SemesterStateType = {
  id: number;
  title: string;
  totalCredit: number;
  totalMajorCredit: number;
  totalMajorBaseCredit: number;
  totalSoyangCredit: number;
  totalDesignCredit: number;
};

export type SemesterState = {
  Semesters: SemesterStateType[];
};

// 액션 객체들에 대한 type 준비
type SemesterAction =
  | ReturnType<typeof createSemester>
  | ReturnType<typeof editSemester>
  | ReturnType<typeof deleteSemester>;

export const initialState: SemesterState = {
  Semesters: [
    {
      id: autoId++,
      title: '1학년 1학기',
      totalCredit: 0,
      totalMajorCredit: 0,
      totalMajorBaseCredit: 0,
      totalSoyangCredit: 0,
      totalDesignCredit: 0,
    },
    {
      id: autoId++,
      title: '1학년 2학기',
      totalCredit: 0,
      totalMajorCredit: 0,
      totalMajorBaseCredit: 0,
      totalSoyangCredit: 0,
      totalDesignCredit: 0,
    },
  ],
};

// 액션 타입 설정 (리덕스 액션 안에 들어갈 타입)
// as const => type의 Typescript값이 string이 아닌 실제값이 되게 하기 위함
export const CREATE_SEMESTER = 'CREATE_SEMESTER' as const;
export const EDIT_SEMESTER = 'EDIT_SEMESTER' as const;
export const DELETE_SEMESTER = 'DELETE_SEMESTER' as const;

// 액션 생성 함수 사용
export const createSemester = (payload: SemesterStateType[]) => ({
  type: CREATE_SEMESTER,
  payload: {
    id: autoId++,
    title: title,
    totalCredit,
    totalMajorCredit,
    totalMajorBaseCredit,
    totalSoyangCredit,
    totalDesignCredit,
  },
});
export const editSemester = () => ({
  type: EDIT_SEMESTER,
  payload: {
    id,
    title,
    totalCredit,
    totalMajorCredit,
    totalMajorBaseCredit,
    totalSoyangCredit,
    totalDesignCredit,
  },
});
export const deleteSemester = () => ({
  type: DELETE_SEMESTER,
  payload: { id },
});

const semester = (
  state: SemesterState = initialState,
  action: SemesterAction,
): SemesterState => {
  switch (action.type) {
    case CREATE_SEMESTER: {
      return {
        Semesters: [...state.Semesters, action.payload],
      };
    }
    case DELETE_SEMESTER: {
      return {
        Semesters: state.Semesters.filter(
          semester => semester.id !== action.payload.id,
        ),
      };
    }
    case EDIT_SEMESTER: {
      return {
        Semesters: [
          state.Semesters.filter(semester => semester.id !== action.payload.id),
          action.payload,
        ],
      };
    }
    default: {
      return;
    }
  }
};

export default semester;
