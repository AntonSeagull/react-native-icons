

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbEaseOutControlPoint = (props: IconProps) => {

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
          <Path  d="M3 21s10 -16 18 -16" />
          <Path  d="M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
          <Path  d="M7 5h2" />
          <Path  d="M14 5h-2" />
        </G>
      </Svg>
    );
  }

