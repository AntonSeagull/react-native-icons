

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRuler = (props: IconProps) => {

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
          <Path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
          <Path d="M4 8l2 0" />
          <Path d="M4 12l3 0" />
          <Path d="M4 16l2 0" />
          <Path d="M8 4l0 2" />
          <Path d="M12 4l0 3" />
          <Path d="M16 4l0 2" />
        </G>
      </Svg>
    );
  }

