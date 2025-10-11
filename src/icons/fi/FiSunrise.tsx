

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiSunrise = (props: IconProps) => {

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
          <Line  x1="12" y1="2" x2="12" y2="9" />
          <Line  x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
          <Line  x1="1" y1="18" x2="3" y2="18" />
          <Line  x1="21" y1="18" x2="23" y2="18" />
          <Line  x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
          <Line  x1="23" y1="22" x2="1" y2="22" />
          <Path  d="M17 18a5 5 0 0 0-10 0" />
        </G>
      </Svg>
    );
  }

