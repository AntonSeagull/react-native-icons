

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsUp = (props: IconProps) => {

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
          <Path  d="M17 3l0 18" />
          <Path  d="M4 6l3 -3l3 3" />
          <Path  d="M20 6l-3 -3l-3 3" />
          <Path  d="M7 3l0 18" />
        </G>
      </Svg>
    );
  }

