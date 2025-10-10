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
        "d": "M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 4v13"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 7v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 19h6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
