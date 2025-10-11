

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCornerLeftDownDouble = (props: IconProps) => {

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
          <Path d="M18 4h-6a3 3 0 0 0 -3 3v7" />
          <Path d="M13 10l-4 4l-4 -4m8 5l-4 4l-4 -4" />
        </G>
      </Svg>
    );
  }

