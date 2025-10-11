

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFrame = (props: IconProps) => {

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
          <Path d="M4 7l16 0" />
          <Path d="M4 17l16 0" />
          <Path d="M7 4l0 16" />
          <Path d="M17 4l0 16" />
        </G>
      </Svg>
    );
  }

