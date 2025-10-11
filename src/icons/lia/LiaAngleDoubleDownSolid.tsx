

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaAngleDoubleDownSolid = (props: IconProps) => {

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
          <Path  d="M 5.21875 6.6875 L 3.78125 8.09375 L 16 20.3125 L 28.21875 8.09375 L 26.78125 6.6875 L 16 17.46875 Z M 5.21875 13.6875 L 3.78125 15.09375 L 16 27.3125 L 28.21875 15.09375 L 26.78125 13.6875 L 16 24.46875 Z" />
        </G>
      </Svg>
    );
  }

