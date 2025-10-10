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
        "d": "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 12 5.12 2.2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m13 12 5.88-9.8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 7h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 18v-2h-.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
