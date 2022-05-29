import { ADD_QUESTION, ANSWER_QUESTION, RECEIVE_QUESTIONS } from '.'
import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { userAddedQuestion, userAnsweredQuestion } from './users'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    data: { questions },
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    data: { question },
  }
}

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    data: { authedUser, qid, answer },
  }
}

export function handleSaveQuestion({ optionOneText, optionTwoText, author }) {
  return (dispatch) => {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        dispatch(userAddedQuestion({ authedUser: author, qid: question.id }))
        dispatch(addQuestion(question))
      }
    )
  }
}

export function handleSaveQuestionAnswer({ authedUser, qid, answer }) {
  return (dispatch) => {
    return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(userAnsweredQuestion({ authedUser, qid, answer }))
      dispatch(answerQuestion({ authedUser, qid, answer }))
    })
  }
}
