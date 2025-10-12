

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgInsertAfter = (props: IconProps) => {

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
          <Path  d="M12 4C12.5523 4 13 4.44772 13 5V8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H13V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V10H8C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8H11V5C11 4.44772 11.4477 4 12 4Z" fill="currentColor" />
          <Path  d="M3 19C3 18.4477 3.44772 18 4 18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

