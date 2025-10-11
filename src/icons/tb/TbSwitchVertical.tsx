

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSwitchVertical = (props: IconProps) => {

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
          <Path d="M3 8l4 -4l4 4" />
          <Path d="M7 4l0 9" />
          <Path d="M13 16l4 4l4 -4" />
          <Path d="M17 10l0 10" />
        </G>
      </Svg>
    );
  }

