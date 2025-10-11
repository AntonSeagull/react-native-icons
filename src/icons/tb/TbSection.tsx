

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSection = (props: IconProps) => {

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
          <Path d="M20 20h.01" />
          <Path d="M4 20h.01" />
          <Path d="M8 20h.01" />
          <Path d="M12 20h.01" />
          <Path d="M16 20h.01" />
          <Path d="M20 4h.01" />
          <Path d="M4 4h.01" />
          <Path d="M8 4h.01" />
          <Path d="M12 4h.01" />
          <Path d="M16 4l0 .01" />
          <Path d="M4 8m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
        </G>
      </Svg>
    );
  }

