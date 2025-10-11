

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiListmonk = (props: IconProps) => {

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
          <Path  d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0m0 5.1953A6.8047 6.8047 0 0 1 18.8047 12 6.8047 6.8047 0 0 1 12 18.8047 6.8047 6.8047 0 0 1 5.1953 12 6.8047 6.8047 0 0 1 12 5.1953" />
        </G>
      </Svg>
    );
  }

