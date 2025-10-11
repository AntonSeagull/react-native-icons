

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbEyeDotted = (props: IconProps) => {

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
          <Path  d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path  d="M21 12h.01" />
          <Path  d="M3 12h.01" />
          <Path  d="M5 15h.01" />
          <Path  d="M5 9h.01" />
          <Path  d="M19 15h.01" />
          <Path  d="M12 18h.01" />
          <Path  d="M12 6h.01" />
          <Path  d="M8 17h.01" />
          <Path  d="M8 7h.01" />
          <Path  d="M16 17h.01" />
          <Path  d="M16 7h.01" />
          <Path  d="M19 9h.01" />
        </G>
      </Svg>
    );
  }

