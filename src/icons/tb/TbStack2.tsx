

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbStack2 = (props: IconProps) => {

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
          <Path d="M12 4l-8 4l8 4l8 -4l-8 -4" />
          <Path d="M4 12l8 4l8 -4" />
          <Path d="M4 16l8 4l8 -4" />
        </G>
      </Svg>
    );
  }

