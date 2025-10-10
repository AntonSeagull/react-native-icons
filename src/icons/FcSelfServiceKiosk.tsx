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
        "fill": "#546E7A",
        "d": "M44,30H4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4V30z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#64B5F6",
        "d": "M40,27H8c-0.6,0-1-0.4-1-1V11c0-0.6,0.4-1,1-1h32c0.6,0,1,0.4,1,1v15C41,26.6,40.6,27,40,27z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#78909C",
        "d": "M40,41H8c-2.2,0-4-1.8-4-4v-7h40v7C44,39.2,42.2,41,40,41z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
