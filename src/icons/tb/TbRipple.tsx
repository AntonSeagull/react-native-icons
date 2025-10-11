

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRipple = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M3 7c3 -2 6 -2 9 0s6 2 9 0" />
          <Path d="M3 17c3 -2 6 -2 9 0s6 2 9 0" />
          <Path d="M3 12c3 -2 6 -2 9 0s6 2 9 0" />
        </G>
      </Svg>
    );
  }

