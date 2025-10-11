

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgToday = (props: IconProps) => {

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
          <Path  d="M18 3H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3ZM6 1C4.34315 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V4C21 2.34315 19.6569 1 18 1H6Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
          <Path  d="M7 6C7 5.44772 7.44772 5 8 5H12C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7H8C7.44772 7 7 6.55228 7 6Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

