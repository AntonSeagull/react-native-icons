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
        "d": "M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 17h-6v-14h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 5l14 1l-.857 5.998m-3.643 1.002h-9.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 21l4 -4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
