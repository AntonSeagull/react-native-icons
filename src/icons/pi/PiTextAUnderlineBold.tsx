

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextAUnderlineBold = (props: IconProps) => {

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
          <Path  d="M58.89,178.86a12,12,0,0,0,16-5.75L90.44,140h75.12l15.58,33.11a12,12,0,0,0,21.72-10.22l-64-136a12,12,0,0,0-21.72,0l-64,136A12,12,0,0,0,58.89,178.86ZM128,60.18,154.27,116H101.73ZM228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216Z" />
        </G>
      </Svg>
    );
  }

