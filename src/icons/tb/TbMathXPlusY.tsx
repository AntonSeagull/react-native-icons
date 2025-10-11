

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMathXPlusY = (props: IconProps) => {

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
          <Path  d="M16 9l3 5.063" />
          <Path  d="M2 9l6 6" />
          <Path  d="M2 15l6 -6" />
          <Path  d="M22 9l-4.8 9" />
          <Path  d="M10 12h4" />
          <Path  d="M12 10v4" />
        </G>
      </Svg>
    );
  }

