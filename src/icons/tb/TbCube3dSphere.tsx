

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCube3dSphere = (props: IconProps) => {

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
          <Path d="M6 17.6l-2 -1.1v-2.5" />
          <Path d="M4 10v-2.5l2 -1.1" />
          <Path d="M10 4.1l2 -1.1l2 1.1" />
          <Path d="M18 6.4l2 1.1v2.5" />
          <Path d="M20 14v2.5l-2 1.12" />
          <Path d="M14 19.9l-2 1.1l-2 -1.1" />
          <Path d="M12 12l2 -1.1" />
          <Path d="M18 8.6l2 -1.1" />
          <Path d="M12 12l0 2.5" />
          <Path d="M12 18.5l0 2.5" />
          <Path d="M12 12l-2 -1.12" />
          <Path d="M6 8.6l-2 -1.1" />
        </G>
      </Svg>
    );
  }

