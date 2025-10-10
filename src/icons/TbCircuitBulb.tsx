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
        "d": "M2 12h5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 12h5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8.5 8.5l7 7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15.5 8.5l-7 7"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
