

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbListCheck = (props: IconProps) => {

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
          <Path  d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
          <Path  d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
          <Path  d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
          <Path  d="M11 6l9 0" />
          <Path  d="M11 12l9 0" />
          <Path  d="M11 18l9 0" />
        </G>
      </Svg>
    );
  }

