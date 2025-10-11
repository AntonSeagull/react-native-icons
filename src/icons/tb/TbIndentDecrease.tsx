

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbIndentDecrease = (props: IconProps) => {

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
          <Path  d="M20 6l-7 0" />
          <Path  d="M20 12l-9 0" />
          <Path  d="M20 18l-7 0" />
          <Path  d="M8 8l-4 4l4 4" />
        </G>
      </Svg>
    );
  }

