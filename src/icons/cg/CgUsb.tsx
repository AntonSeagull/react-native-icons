

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgUsb = (props: IconProps) => {

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
          <Path  d="M10 4.5H11V6.5H10V4.5Z" fill="currentColor" />
          <Path  d="M14 4.5H13V6.5H14V4.5Z" fill="currentColor" />
          <Path  d="M7 8.5V1.5H17V8.5H19V19.5C19 21.1569 17.6569 22.5 16 22.5H8C6.34315 22.5 5 21.1569 5 19.5V8.5H7ZM9 3.5H15V8.5H9V3.5ZM17 10.5H7V19.5C7 20.0523 7.44772 20.5 8 20.5H16C16.5523 20.5 17 20.0523 17 19.5V10.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

