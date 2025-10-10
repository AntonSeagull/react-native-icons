import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "class": "icon",
    "viewBox": "0 0 1024 1024"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
