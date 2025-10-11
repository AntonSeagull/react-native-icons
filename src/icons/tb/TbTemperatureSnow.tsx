

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTemperatureSnow = (props: IconProps) => {

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
          <Path  d="M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5" />
          <Path  d="M4 9h4" />
          <Path  d="M14.75 4l1 2h2.25" />
          <Path  d="M17 4l-3 5l2 3" />
          <Path  d="M20.25 10l-1.25 2l1.25 2" />
          <Path  d="M22 12h-6l-2 3" />
          <Path  d="M18 18h-2.25l-1 2" />
          <Path  d="M17 20l-3 -5h-1" />
          <Path  d="M12 9l2.088 .008" />
        </G>
      </Svg>
    );
  }

