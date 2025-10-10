import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "512",
    "height": "512",
    "viewBox": "0 0 512 512"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M480,240H272V32H480ZM316,196H436V76H316Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M240,240H32V32H240ZM76,196H196V76H76Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M240,480H32V272H240ZM76,436H196V316H76Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
