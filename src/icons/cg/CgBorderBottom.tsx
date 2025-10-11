

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgBorderBottom = (props: IconProps) => {

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
          <Path  d="M8 8H16V15H19V5H5V15H8V8Z" fill="currentColor" fillOpacity="0.3" />
          <Path  d="M5 17H19V20H5V17Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

