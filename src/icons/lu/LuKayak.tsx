

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuKayak = (props: IconProps) => {

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
          <Path  d="M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z" />
          <Path  d="M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61" />
          <Path  d="m6.707 6.707 10.586 10.586" />
          <Path  d="M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z" />
        </G>
      </Svg>
    );
  }

