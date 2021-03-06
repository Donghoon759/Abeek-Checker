let autoId = 0;

export type SubjectStateType = {
  id: number;
  parentId: number;
  title: string;
  category: string;
  subjectCredit: number;
  subjectMajorCredit: number;
  subjectMajorBaseCredit: number;
  subjectSoyangCredit: number;
  subjectDesignCredit: number;
};

export type SubjectState = {
  Subjects: SubjectStateType[];
};

type SubjectAction =
  | ReturnType<typeof createSubject>
  | ReturnType<typeof editSubject>
  | ReturnType<typeof deleteSubject>;

export const initialState: SubjectState = {
  Subjects: [
    {
      id: autoId++,
      parentId: 0,
      title: '기초프로그래밍',
      category: '전공',
      subjectCredit: 3,
      subjectMajorCredit: 3,
      subjectMajorBaseCredit: 0,
      subjectSoyangCredit: 0,
      subjectDesignCredit: 2,
    },
    {
      id: autoId++,
      parentId: 0,
      title: '공학수학1',
      category: '전공기반',
      subjectCredit: 3,
      subjectMajorCredit: 0,
      subjectMajorBaseCredit: 3,
      subjectSoyangCredit: 0,
      subjectDesignCredit: 0,
    },
    {
      id: autoId++,
      parentId: 0,
      title: '기초물리학실험',
      category: '전공기반',
      subjectCredit: 3,
      subjectMajorCredit: 0,
      subjectMajorBaseCredit: 3,
      subjectSoyangCredit: 0,
      subjectDesignCredit: 0,
    },
    {
      id: autoId++,
      parentId: 1,
      title: '실용화법',
      category: '기본소양',
      subjectCredit: 3,
      subjectMajorCredit: 0,
      subjectMajorBaseCredit: 0,
      subjectSoyangCredit: 3,
      subjectDesignCredit: 0,
    },
  ],
};

export const ADD_SUBJECT = 'ADD_SUBJECT' as const;
export const EDIT_SUBJECT = 'EDIT_SUBJECT' as const;
export const DELETE_SUBJECT = 'DELETE_SUBJECT' as const;

export const createSubject = (payload: SubjectStateType) => ({
  type: ADD_SUBJECT,
  payload: {
    id: autoId++,
    parentId: payload.parentId,
    title: payload.title,
    category: payload.category,
    subjectCredit: payload.subjectCredit,
    subjectMajorCredit: payload.subjectMajorCredit,
    subjectMajorBaseCredit: payload.subjectMajorBaseCredit,
    subjectSoyangCredit: payload.subjectSoyangCredit,
    subjectDesignCredit: payload.subjectDesignCredit,
  },
});

export const editSubject = (payload: SubjectStateType) => ({
  type: EDIT_SUBJECT,
  payload: {
    id: payload.id,
    parentId: payload.parentId,
    title: payload.title,
    category: payload.category,
    subjectCredit: payload.subjectCredit,
    subjectMajorCredit: payload.subjectMajorCredit,
    subjectMajorBaseCredit: payload.subjectMajorBaseCredit,
    subjectSoyangCredit: payload.subjectSoyangCredit,
    subjectDesignCredit: payload.subjectDesignCredit,
  },
});

export const deleteSubject = (id: number) => ({
  type: DELETE_SUBJECT,
  payload: { id },
});

const subject = (
  state: SubjectState = initialState,
  action: SubjectAction,
): SubjectState => {
  switch (action.type) {
    case ADD_SUBJECT: {
      return {
        Subjects: [...state.Subjects, action.payload],
      };
    }
    case DELETE_SUBJECT: {
      return {
        Subjects: state.Subjects.filter(
          subject => subject.id !== action.payload.id,
        ),
      };
    }
    case EDIT_SUBJECT: {
      return {
        Subjects: [
          ...state.Subjects.filter(subject => subject.id !== action.payload.id),
          action.payload,
        ],
      };
    }
    default: {
      return state;
    }
  }
};

export default subject;
