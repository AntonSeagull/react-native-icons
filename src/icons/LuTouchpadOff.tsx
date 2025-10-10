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
        "d": "M12 20v-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19.656 14H22"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 14h12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m2 2 20 20"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9.656 4H20a2 2 0 0 1 2 2v10.344"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
