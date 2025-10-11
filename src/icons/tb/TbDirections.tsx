

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDirections = (props: IconProps) => {

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
          <Path  d="M12 21v-4" />
          <Path  d="M12 13v-4" />
          <Path  d="M12 5v-2" />
          <Path  d="M10 21h4" />
          <Path  d="M8 5v4h11l2 -2l-2 -2z" />
          <Path  d="M14 13v4h-8l-2 -2l2 -2z" />
        </G>
      </Svg>
    );
  }

