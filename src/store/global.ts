export type GlobalStateType = {
  isOpen: boolean;
};

// 액션 객체들에 대한 type 준비
type GlobalAction =
  | ReturnType<typeof openModal>
  | ReturnType<typeof closeModal>;
//   | ReturnType<typeof deleteSemester>;

export const initialState: GlobalStateType = {
  isOpen: false,
};

// 액션 타입 설정 (리덕스 액션 안에 들어갈 타입)
// as const => type의 Typescript값이 string이 아닌 실제값이 되게 하기 위함
export const OPEN_MODAL = 'OPEN_MODAL' as const;
export const CLOSE_MODAL = 'CLOSE_MODAL' as const;

// // 액션 생성 함수 사용
export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

const global = (
  state: GlobalStateType = initialState,
  action: GlobalAction,
): GlobalStateType => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        isOpen: true,
      };
    }
    case CLOSE_MODAL: {
      return {
        isOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default global;
