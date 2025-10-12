

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRouterOff = (props: IconProps) => {

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
          <Path  d="M17 13h2a2 2 0 0 1 2 2v2m-.588 3.417c-.362 .36 -.861 .583 -1.412 .583h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h8" />
          <Path  d="M17 17v.01" />
          <Path  d="M13 17v.01" />
          <Path  d="M12.226 8.2a4 4 0 0 1 6.024 .55" />
          <Path  d="M9.445 5.407a8 8 0 0 1 12.055 1.093" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

