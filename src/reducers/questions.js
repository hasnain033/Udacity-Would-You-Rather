import { ADD_QUESTION, RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions'

export default function questionsReducer(questions = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...questions,
        ...action.data.questions,
      }
    case ADD_QUESTION:
      const { question } = action.data
      return {
        ...questions,
        [question.id]: question,
      }
    case ANSWER_QUESTION:
      const { authedUser, qid, answer } = action.data
      const targetOption = questions[qid][answer]
      return {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...targetOption,
            votes: [...targetOption.votes, authedUser],
          },
        },
      }
    default:
      return questions
  }
}
