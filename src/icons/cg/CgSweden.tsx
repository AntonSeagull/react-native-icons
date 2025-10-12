

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgSweden = (props: IconProps) => {

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
          <Path  d="M23 4H10V11H23V4Z" fill="currentColor" />
          <Path  d="M23 13V20H10V13H23Z" fill="currentColor" />
          <Path  d="M8 13V20H1V13H8Z" fill="currentColor" />
          <Path  d="M1 11V4H8V11H1Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

