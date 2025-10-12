

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiExpandRightLine = (props: IconProps) => {

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
          <Path  d="M17.1717 11.0001L12.5148 6.34323L13.929 4.92902L21.0001 12.0001L13.929 19.0712L12.5148 17.6569L17.1716 13.0001L7.9998 13.0002L7.99978 11.0002L17.1717 11.0001ZM3.99985 19L3.99985 5.00003H5.99985V19H3.99985Z" />
        </G>
      </Svg>
    );
  }

