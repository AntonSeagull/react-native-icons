

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiArrowGoForwardFill = (props: IconProps) => {

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
          <Path  d="M16 7H11C7.68629 7 5 9.68629 5 13C5 16.3137 7.68629 19 11 19H20V21H11C6.58172 21 3 17.4183 3 13C3 8.58172 6.58172 5 11 5H16V1L22 6L16 11V7Z" />
        </G>
      </Svg>
    );
  }

