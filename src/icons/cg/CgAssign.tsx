

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgAssign = (props: IconProps) => {

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
          <Path  d="M6 6H10V4H4V10H6V6Z" fill="currentColor" />
          <Path  d="M10 18H6V14H4V20H10V18Z" fill="currentColor" />
          <Path  d="M14 6H18V10H20V4H14V6Z" fill="currentColor" />
          <Path  d="M14 18H18V14H20V20H14V18Z" fill="currentColor" />
          <Path  d="M12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

