

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgInsertBefore = (props: IconProps) => {

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
          <Path  d="M3 5C3 5.55228 3.44772 6 4 6H20C20.5523 6 21 5.55228 21 5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5Z" fill="currentColor" />
          <Path  d="M12 20C12.5523 20 13 19.5523 13 19V16H16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14H13V11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V14H8C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H11V19C11 19.5523 11.4477 20 12 20Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

