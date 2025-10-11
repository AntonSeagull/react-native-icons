

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsCross = (props: IconProps) => {

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
          <Path d="M16 4h4v4" />
          <Path d="M15 9l5 -5" />
          <Path d="M4 20l5 -5" />
          <Path d="M16 20h4v-4" />
          <Path d="M4 4l16 16" />
        </G>
      </Svg>
    );
  }

