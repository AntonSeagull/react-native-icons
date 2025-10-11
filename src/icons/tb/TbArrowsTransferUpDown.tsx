

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsTransferUpDown = (props: IconProps) => {

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
          <Path  d="M7 21v-6" />
          <Path  d="M20 6l-3 -3l-3 3" />
          <Path  d="M10 18l-3 3l-3 -3" />
          <Path  d="M7 3v2" />
          <Path  d="M7 9v2" />
          <Path  d="M17 3v6" />
          <Path  d="M17 21v-2" />
          <Path  d="M17 15v-2" />
        </G>
      </Svg>
    );
  }

