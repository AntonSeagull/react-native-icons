

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgDistributeHorizontal = (props: IconProps) => {

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
          <Path  d="M11 9H13V15H11V9Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
          <Path  d="M5 5V19H7V5H5Z" fill="currentColor" />
          <Path  d="M17 5V19H19V5H17Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

