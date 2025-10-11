

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgDialpad = (props: IconProps) => {

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
          <Path  d="M5.5 3H8.5V6H5.5V3Z" fill="currentColor" />
          <Path  d="M5.5 8H8.5V11H5.5V8Z" fill="currentColor" />
          <Path  d="M5.5 13V16H8.5V13H5.5Z" fill="currentColor" />
          <Path  d="M10.5 3H13.5V6H10.5V3Z" fill="currentColor" />
          <Path  d="M10.5 8V11H13.5V8H10.5Z" fill="currentColor" />
          <Path  d="M10.5 13H13.5V16H10.5V13Z" fill="currentColor" />
          <Path  d="M10.5 18V21H13.5V18H10.5Z" fill="currentColor" />
          <Path  d="M15.5 3H18.5V6H15.5V3Z" fill="currentColor" />
          <Path  d="M15.5 8V11H18.5V8H15.5Z" fill="currentColor" />
          <Path  d="M15.5 13H18.5V16H15.5V13Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

