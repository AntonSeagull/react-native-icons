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
        "fill": "#3F51B5",
        "d": "M43.4,8.3L4,15l-0.3-2c-0.4-2.2,1.1-4.2,3.3-4.6l31.6-5.3c2.2-0.4,4.2,1.1,4.6,3.3L43.4,8.3z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#3F51B5",
        "d": "M40,41H8c-2.2,0-4-1.8-4-4V15h40v22C44,39.2,42.2,41,40,41z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
