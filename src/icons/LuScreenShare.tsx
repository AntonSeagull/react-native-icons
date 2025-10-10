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
        "d": "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 21h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 17v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m17 8 5-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 3h5v5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
