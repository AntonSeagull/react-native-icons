

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCircleDashed = (props: IconProps) => {

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
          <Path  d="M10.1 2.182a10 10 0 0 1 3.8 0" />
          <Path  d="M13.9 21.818a10 10 0 0 1-3.8 0" />
          <Path  d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
          <Path  d="M2.182 13.9a10 10 0 0 1 0-3.8" />
          <Path  d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
          <Path  d="M21.818 10.1a10 10 0 0 1 0 3.8" />
          <Path  d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
          <Path  d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
        </G>
      </Svg>
    );
  }

