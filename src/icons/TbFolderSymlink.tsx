import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "24",
    "height": "24",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M3 21v-4a3 3 0 0 1 3 -3h5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 17l3 -3l-3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 11v-5a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
