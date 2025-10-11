

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAtom2 = (props: IconProps) => {

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
          <Path  d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path  d="M12 21l0 .01" />
          <Path  d="M3 9l0 .01" />
          <Path  d="M21 9l0 .01" />
          <Path  d="M8 20.1a9 9 0 0 1 -5 -7.1" />
          <Path  d="M16 20.1a9 9 0 0 0 5 -7.1" />
          <Path  d="M6.2 5a9 9 0 0 1 11.4 0" />
        </G>
      </Svg>
    );
  }

