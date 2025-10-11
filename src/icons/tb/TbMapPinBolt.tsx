

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMapPinBolt = (props: IconProps) => {

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
          <Path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <Path d="M13.414 20.9a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 13.591 -4.629" />
          <Path d="M19 16l-2 3h4l-2 3" />
        </G>
      </Svg>
    );
  }

