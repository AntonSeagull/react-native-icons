

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSchema = (props: IconProps) => {

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
          <Path  d="M5 2h5v4h-5z" />
          <Path  d="M15 10h5v4h-5z" />
          <Path  d="M5 18h5v4h-5z" />
          <Path  d="M5 10h5v4h-5z" />
          <Path  d="M10 12h5" />
          <Path  d="M7.5 6v4" />
          <Path  d="M7.5 14v4" />
        </G>
      </Svg>
    );
  }

