/* 
  [타입의 위계]
  Event -> target 속성이 정의되어 있음. target 속성 타입과 호환되어야 함
  UIEvent
  InputEvent
*/
export namespace VueEvent {
  export interface Input<T extends EventTarget> extends InputEvent {
    target: T;
  }
}

// a.vue(이 네임스페이스를 import 하는 파일)
// VueEvent.Input와 같이 접근 가능
