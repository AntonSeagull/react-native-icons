

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPhotoSensor = (props: IconProps) => {

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
          <Path d="M17 5h2a2 2 0 0 1 2 2v2" />
          <Path d="M21 15v2a2 2 0 0 1 -2 2h-2" />
          <Path d="M7 19h-2a2 2 0 0 1 -2 -2v-2" />
          <Path d="M3 9v-2a2 2 0 0 1 2 -2h2" />
          <Path d="M7 9m0 1a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1z" />
        </G>
      </Svg>
    );
  }

