import { CommitOptions, DispatchOptions, Store } from 'vuex';
import { Actions } from './actions';
import { Mutations } from './mutations';
import { RootState } from './state';

type MyMutations = {
	commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
		key: K,
		payload?: P,
		options?: CommitOptions
	): ReturnType<Mutations[K]>;
};

type MyActions = {
	dispatch<K extends keyof Actions>(
		key: K,
		payload?: Parameters<Actions[K]>[1],
		options?: DispatchOptions
	): ReturnType<Actions[K]>;
};

// &: 인터섹션(합집합)
// 인터페이스 타입을 합친다.
// Omit은 특정 key를 제외한 인터페이스를 취한다.
// Store의 commit과 dispatch 속성을 빼고서 우리가 정의한 commit과 dispatch를 넣는다.
export type MyStore = Omit<Store<RootState>, 'commit' | 'dispatch'> &
	MyMutations &
	MyActions;
