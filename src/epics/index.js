import { combineEpics, ofType } from 'redux-observable';
import { EMPTY } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ACTIONS, FETCH_SUBJECTS, SAVE_BOOK, SET_SELECTED_SUBJECT } from '../reducers/actions';

const SERVER_URL = 'http://localhost:3010'; // <- This should come from an environment variable

const fetchSubjectsEpic = actions$ =>
  actions$.pipe(
    ofType(FETCH_SUBJECTS),
    switchMap(action => ajax.getJSON(`${SERVER_URL}/subjects`)),
    map(subjects => ACTIONS.setSubjects(subjects))
  );

const setSelectedSubjectEpic = actions$ =>
  actions$.pipe(
    ofType(SET_SELECTED_SUBJECT),
    switchMap(action => ajax.getJSON(`${SERVER_URL}/books?subjects_like=${action.payload}`)),
    map(books => ACTIONS.setBooks(books))
  );

const saveBookEpic = actions$ =>
  actions$.pipe(
    ofType(SAVE_BOOK),
    switchMap(action => {
      return ajax.put(`${SERVER_URL}/books/${action.payload.id}`, action.payload, {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      });
    }),
    catchError(err => {
      window['alert']('Save failed!');
      return EMPTY;
    }),
    tap(() => {
      window['alert']('Save successful!');
    }),
    map(() => ACTIONS.fetchSubjects())
  );

export const rootEpics = combineEpics(fetchSubjectsEpic, setSelectedSubjectEpic, saveBookEpic);
