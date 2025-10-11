

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBackpackOff = (props: IconProps) => {

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
          <Path  d="M10 6h3a6 6 0 0 1 6 6v3m-.129 3.872a3 3 0 0 1 -2.871 2.128h-8a3 3 0 0 1 -3 -3v-6a5.99 5.99 0 0 1 2.285 -4.712" />
          <Path  d="M10 6v-1a2 2 0 1 1 4 0v1" />
          <Path  d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

