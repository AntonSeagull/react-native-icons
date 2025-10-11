

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPhotoSensor3 = (props: IconProps) => {

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
          <Path d="M17 4h1a2 2 0 0 1 2 2v1" />
          <Path d="M20 17v1a2 2 0 0 1 -2 2h-1" />
          <Path d="M7 20h-1a2 2 0 0 1 -2 -2v-1" />
          <Path d="M4 7v-1a2 2 0 0 1 2 -2h1" />
          <Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M12 18v2" />
          <Path d="M4 12h2" />
          <Path d="M12 4v2" />
          <Path d="M20 12h-2" />
        </G>
      </Svg>
    );
  }

