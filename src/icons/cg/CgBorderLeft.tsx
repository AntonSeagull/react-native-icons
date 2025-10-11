

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgBorderLeft = (props: IconProps) => {

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
          <Path  d="M16 8V16H9L9 19H19L19 5L9 5V8H16Z" fill="currentColor" fillOpacity="0.3" />
          <Path  d="M7 5L7 19H4L4 5L7 5Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

