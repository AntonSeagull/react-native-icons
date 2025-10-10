import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "version": "1",
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 48 48",
    "enable-background": "new 0 0 48 48"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "fill": "#78909C",
        "d": "M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#CFD8DC",
        "d": "M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
