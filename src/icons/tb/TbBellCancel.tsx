

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBellCancel = (props: IconProps) => {

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
          <Path  d="M12.5 17h-8.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1" />
          <Path  d="M9 17v1a3 3 0 0 0 3 3" />
          <Path  d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path  d="M17 21l4 -4" />
        </G>
      </Svg>
    );
  }

