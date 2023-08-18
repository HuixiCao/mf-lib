interface fpcWindow extends Window {
  fpcLibraries?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    commons: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    moment: any;
  };
}

const $commons = (window as unknown as fpcWindow).fpcLibraries?.commons['V3'];
const $moment = (window as unknown as fpcWindow).fpcLibraries?.moment['V1'];

export { $commons, $moment };
