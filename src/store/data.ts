// export interface SchedulesDataParams {

// }

type DataState = {
  title: string;
  totalCredit: number;
  totalMajorCredit: number;
  totalMajorBaseCredit: number;
  totalSoyangCredit: number;
  totalDesignCredit: number;
  category: string;
  subjectCredit: number;
  subjectMajorCredit: number;
  subjectMajorBaseCredit: number;
  subjectSoyangCredit: number;
  subjectDesignCredit: number;
};

type SemesterAction =
  | ReturnType<typeof createSemester>
  | ReturnType<typeof editSemester>
  | ReturnType<typeof deleteSemester>;

export const initialState = {
  Semesters: [
    {
      title: '1학년 1학기',
      totalCredit: 0,
      totalMajorCredit: 0,
      totalMajorBaseCredit: 0,
      totalSoyangCredit: 0,
      totalDesignCredit: 0,
      Subjects: [
        {
          title: '기초프로그래밍',
          category: '전공',
          subjectCredit: 3,
          subjectMajorCredit: 3,
          subjectMajorBaseCredit: 0,
          subjectSoyangCredit: 0,
          subjectDesignCredit: 0,
        },
        {
          title: '공학수학1',
          category: '전공기반',
          subjectCredit: 3,
          subjectMajorCredit: 0,
          subjectMajorBaseCredit: 3,
          subjectSoyangCredit: 0,
          subjectDesignCredit: 0,
        },
      ],
    },
    {
      title: '1학년 2학기',
      totalCredit: 0,
      totalMajorCredit: 0,
      totalMajorBaseCredit: 0,
      totalSoyangCredit: 0,
      totalDesignCredit: 0,
      Subjects: [
        {
          title: '기초물리학실험',
          category: '전공기반',
          subjectCredit: 3,
          subjectMajorCredit: 0,
          subjectMajorBaseCredit: 3,
          subjectSoyangCredit: 0,
          subjectDesignCredit: 0,
        },
        {
          title: '실용화법',
          category: '기본소양',
          subjectCredit: 3,
          subjectMajorCredit: 0,
          subjectMajorBaseCredit: 0,
          subjectSoyangCredit: 3,
          subjectDesignCredit: 0,
        },
      ],
    },
  ],
};

export const CREATE_SEMESTER = 'CREATE_SEMESTER' as const;
export const EDIT_SEMESTER = 'EDIT_SEMESTER' as const;
export const DELETE_SEMESTER = 'DELETE_SEMESTER' as const;

export const CREATE_SUBJECT = 'CREATE_SUBJECT' as const;
export const EDIT_SUBJECT = 'EDIT_SUBJECT' as const;
export const DELETE_SUBJECT = 'DELETE_SUBJECT' as const;

export const createSubject = () => ({ type: CREATE_SUBJECT });
export const editSubject = () => ({ type: EDIT_SUBJECT });
export const deleteSubject = () => ({ type: DELETE_SUBJECT });

export const createSemester = () => ({ type: CREATE_SEMESTER });
export const editSemester = () => ({ type: EDIT_SEMESTER });
export const deleteSemester = () => ({ type: DELETE_SEMESTER });

const reducer = (state: DataState = initialState, action: SemesterAction) => {
  switch (action.type) {
    case CREATE_SUBJECT: {
      return {
        ...state,
      };
    }
    case DELETE_SUBJECT: {
      return;
    }
    case CREATE_SEMESTER: {
      return {
        ...state,
      };
    }
    case DELETE_SEMESTER: {
      return;
    }
    default: {
      return;
    }
  }
};

export default reducer;
