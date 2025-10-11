

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowRampRight2 = (props: IconProps) => {

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
          <Path  d="M6 3v8.707" />
          <Path  d="M16 14l4 -4l-4 -4" />
          <Path  d="M6 21c0 -6.075 4.925 -11 11 -11h3" />
        </G>
      </Svg>
    );
  }

