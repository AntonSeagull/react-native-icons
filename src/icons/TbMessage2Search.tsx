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
        "d": "M8 9h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 13h5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 21l-.5 -.5l-2.5 -2.5h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20.2 20.2l1.8 1.8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
