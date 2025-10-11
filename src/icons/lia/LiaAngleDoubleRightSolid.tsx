

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaAngleDoubleRightSolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M 9.09375 4.78125 L 7.6875 6.21875 L 17.46875 16 L 7.6875 25.78125 L 9.09375 27.21875 L 20.3125 16 Z M 16.09375 4.78125 L 14.6875 6.21875 L 24.46875 16 L 14.6875 25.78125 L 16.09375 27.21875 L 27.3125 16 Z" />
        </G>
      </Svg>
    );
  }

