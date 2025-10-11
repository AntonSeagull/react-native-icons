

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFountain = (props: IconProps) => {

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
          <Path  d="M9 16v-5a2 2 0 1 0 -4 0" />
          <Path  d="M15 16v-5a2 2 0 1 1 4 0" />
          <Path  d="M12 16v-10a3 3 0 0 1 6 0" />
          <Path  d="M6 6a3 3 0 0 1 6 0" />
          <Path  d="M3 16h18v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2z" />
        </G>
      </Svg>
    );
  }

