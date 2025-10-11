

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMagnetic = (props: IconProps) => {

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
          <Path d="M12 3v18" />
          <Path d="M18 7c-.633 -1.255 -1.538 -2 -2.5 -2c-1.933 0 -3.5 3.134 -3.5 7s1.567 7 3.5 7s3.5 -3.134 3.5 -7v-1" />
          <Path d="M6 7c.633 -1.255 1.538 -2 2.5 -2c1.933 0 3.5 3.134 3.5 7s-1.567 7 -3.5 7s-3.5 -3.134 -3.5 -7v-1" />
          <Path d="M3 13l2 -2l2 2" />
          <Path d="M17 13l2 -2l2 2" />
        </G>
      </Svg>
    );
  }

