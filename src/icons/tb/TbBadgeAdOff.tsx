

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBadgeAdOff = (props: IconProps) => {

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
          <Path  d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
          <Path  d="M14 14v1h1m2 -2v-2a2 2 0 0 0 -2 -2h-1v1" />
          <Path  d="M7 15v-4.5a1.5 1.5 0 0 1 2.077 -1.385m.788 .762c.087 .19 .135 .4 .135 .623v4.5" />
          <Path  d="M7 13h3" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

