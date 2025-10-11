

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCrane = (props: IconProps) => {

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
          <Path  d="M6 21h6" />
          <Path  d="M9 21v-18l-6 6h18" />
          <Path  d="M9 3l10 6" />
          <Path  d="M17 9v4a2 2 0 1 1 -2 2" />
        </G>
      </Svg>
    );
  }

