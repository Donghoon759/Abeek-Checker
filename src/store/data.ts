// export interface SchedulesDataParams {

// }

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

export const CREATE_SEMESTER = 'CREATE_SEMESTER';
export const EDIT_SEMESTER = 'EDIT_SEMESTER';
export const DELETE_SEMESTER = 'DELETE_SEMESTER';

export const CREATE_SUBJECT = 'CREATE_SUBJECT';
export const EDIT_SUBJECT = 'EDIT_SUBJECT';
export const DELETE_SUBJECT = 'DELETE_SUBJECT';

export const createSubject = () => ({ type: CREATE_SUBJECT });
export const editSubject = () => ({ type: EDIT_SUBJECT });
export const deleteSubject = () => ({ type: DELETE_SUBJECT });

export const createSEMESTER = () => ({ type: CREATE_SEMESTER });
export const editSEMESTER = () => ({ type: EDIT_SEMESTER });
export const deleteSEMESTER = () => ({ type: DELETE_SEMESTER });

const reducer = (state = initialState, action) => {
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
