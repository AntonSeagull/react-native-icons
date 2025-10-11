

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGpsBold = (props: IconProps) => {

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
          <Path  d="M240,116H219.22A92.21,92.21,0,0,0,140,36.78V16a12,12,0,0,0-24,0V36.78A92.21,92.21,0,0,0,36.78,116H16a12,12,0,0,0,0,24H36.78A92.21,92.21,0,0,0,116,219.22V240a12,12,0,0,0,24,0V219.22A92.21,92.21,0,0,0,219.22,140H240a12,12,0,0,0,0-24ZM128,196a68,68,0,1,1,68-68A68.07,68.07,0,0,1,128,196Z" />
        </G>
      </Svg>
    );
  }

