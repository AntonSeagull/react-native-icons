

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowBendLeftUpBold = (props: IconProps) => {

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
          <Path  d="M212,224a12,12,0,0,1-12,12A108.12,108.12,0,0,1,92,128V61L64.49,88.49a12,12,0,0,1-17-17l48-48a12,12,0,0,1,17,0l48,48a12,12,0,0,1-17,17L116,61v67a84.09,84.09,0,0,0,84,84A12,12,0,0,1,212,224Z" />
        </G>
      </Svg>
    );
  }

