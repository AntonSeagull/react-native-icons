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
        "d": "M80,212V448a16,16,0,0,0,16,16h96V328a24,24,0,0,1,24-24h80a24,24,0,0,1,24,24V464h96a16,16,0,0,0,16-16V212",
        "style": "fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M480,256,266.89,52c-5-5.28-16.69-5.34-21.78,0L32,256",
        "style": "fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
