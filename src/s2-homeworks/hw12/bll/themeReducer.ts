const initState = {
  themeId: 1,
}

type ThemeReducerInitState = typeof initState

export const themeReducer = (state: ThemeReducerInitState = initState, action: ThemeId): ThemeReducerInitState => { // fix any
  switch (action.type) {
    case 'SET_THEME_ID':
      return {...state, themeId: action.id}
    default:
      return state
  }
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID' as const, id}) // fix any

export type ThemeId = ReturnType<typeof changeThemeId>