

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaAngleDoubleUpSolid = (props: IconProps) => {

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
          <Path d="M 16 4.6875 L 3.78125 16.90625 L 5.21875 18.3125 L 16 7.53125 L 26.78125 18.3125 L 28.21875 16.90625 Z M 16 11.6875 L 3.78125 23.90625 L 5.21875 25.3125 L 16 14.53125 L 26.78125 25.3125 L 28.21875 23.90625 Z" />
        </G>
      </Svg>
    );
  }

