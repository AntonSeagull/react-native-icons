

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbStackFront = (props: IconProps) => {

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
          <Path d="M12 4l-8 4l8 4l8 -4l-8 -4" fill="currentColor" />
          <Path d="M8 14l-4 2l8 4l8 -4l-4 -2" />
          <Path d="M8 10l-4 2l8 4l8 -4l-4 -2" />
        </G>
      </Svg>
    );
  }

