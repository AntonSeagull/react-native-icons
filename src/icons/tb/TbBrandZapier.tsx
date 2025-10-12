

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandZapier = (props: IconProps) => {

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
          <Path  d="M3 12h6" />
          <Path  d="M21 12h-6" />
          <Path  d="M12 3v6" />
          <Path  d="M12 15v6" />
          <Path  d="M5.636 5.636l4.243 4.243" />
          <Path  d="M18.364 18.364l-4.243 -4.243" />
          <Path  d="M18.364 5.636l-4.243 4.243" />
          <Path  d="M9.879 14.121l-4.243 4.243" />
        </G>
      </Svg>
    );
  }

