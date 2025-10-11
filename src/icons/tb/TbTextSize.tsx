

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTextSize = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M3 7v-2h13v2" />
          <Path  d="M10 5v14" />
          <Path  d="M12 19h-4" />
          <Path  d="M15 13v-1h6v1" />
          <Path  d="M18 12v7" />
          <Path  d="M17 19h2" />
        </G>
      </Svg>
    );
  }

