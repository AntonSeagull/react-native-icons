

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPalette = (props: IconProps) => {

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
          <Circle  cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <Circle  cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <Circle  cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <Circle  cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <Path  d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
        </G>
      </Svg>
    );
  }

