

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDisabledOff = (props: IconProps) => {

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
          <Path d="M11 7a2 2 0 1 0 -2 -2" />
          <Path d="M11 11v4h4l4 5" />
          <Path d="M15 11h1" />
          <Path d="M7 11.5a5 5 0 1 0 6 7.5" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

