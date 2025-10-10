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
        "d": "M2 9a10 10 0 1 0 20 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 19a10 10 0 0 1 10 -10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 9a10 10 0 0 1 10 10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 4a9.7 9.7 0 0 1 2.99 7.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
