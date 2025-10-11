

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgCast = (props: IconProps) => {

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
          <Path  d="M20 6H4V8H2V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H15V18H20V6Z" fill="currentColor" />
          <Path  d="M2 13C5.86599 13 9 16.134 9 20H7C7 17.2386 4.76142 15 2 15V13Z" fill="currentColor" />
          <Path  d="M2 17C3.65685 17 5 18.3431 5 20H2V17Z" fill="currentColor" />
          <Path  d="M2 9C8.07513 9 13 13.9249 13 20H11C11 15.0294 6.97056 11 2 11V9Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

