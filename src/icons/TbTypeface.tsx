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
        "d": "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 17a2 2 0 0 1 -2 -2v-8h-5a2 2 0 0 0 -2 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 17a2.775 2.775 0 0 0 2.632 -1.897l.368 -1.103a13.4 13.4 0 0 1 3.236 -5.236l1.764 -1.764"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 14h5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
