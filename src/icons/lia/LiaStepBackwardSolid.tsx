

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaStepBackwardSolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M 8 5 L 8 27 L 10 27 L 10 16.5 L 10.4375 16.8125 L 23.4375 25.8125 L 25 26.90625 L 25 5.09375 L 23.4375 6.1875 L 10.4375 15.1875 L 10 15.5 L 10 5 Z M 23 8.90625 L 23 23.09375 L 12.75 16 Z" />
        </G>
      </Svg>
    );
  }

