

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDiamondsFourBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M119.51,108.49a12,12,0,0,0,17,0l38-38a12,12,0,0,0,0-17l-38-38a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17ZM128,41l21,21L128,83,107,62Zm8.49,106.54a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17l38,38a12,12,0,0,0,17,0l38-38a12,12,0,0,0,0-17ZM128,215l-21-21,21-21,21,21Zm-19.51-95.52-38-38a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17l38,38a12,12,0,0,0,17,0l38-38A12,12,0,0,0,108.49,119.51ZM62,149,41,128l21-21,21,21Zm178.49-29.52-38-38a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17l38,38a12,12,0,0,0,17,0l38-38A12,12,0,0,0,240.49,119.51ZM194,149l-21-21,21-21,21,21Z" />
        </G>
      </Svg>
    );
  }

