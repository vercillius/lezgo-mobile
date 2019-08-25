import {FBLOGIN} from '../constants/action-types';

export function login(payload) {
  return { type: FBLOGIN.LOGIN, payload: payload }
};

export function logout(payload) {
  return { type: FBLOGIN.LOGOUT, payload: payload }
};

export function logging(payload){
  return {type: FBLOGIN.LOGGING, payload: payload}
}

