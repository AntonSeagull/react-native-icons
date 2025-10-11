

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrIteration = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="none" d="M1,9 L1,23 L15,23 M5,5 L5,19 L19,19 M9,15 L23,15 L23,1 L9,1 L9,15 L9,15 L9,15 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

