

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaAngleDoubleLeftSolid = (props: IconProps) => {

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
          <Path d="M 15.90625 4.78125 L 4.6875 16 L 15.90625 27.21875 L 17.3125 25.78125 L 7.53125 16 L 17.3125 6.21875 Z M 22.90625 4.78125 L 11.6875 16 L 22.90625 27.21875 L 24.3125 25.78125 L 14.53125 16 L 24.3125 6.21875 Z" />
        </G>
      </Svg>
    );
  }

