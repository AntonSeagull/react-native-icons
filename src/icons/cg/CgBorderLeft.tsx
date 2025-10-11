

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgBorderLeft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M16 8V16H9L9 19H19L19 5L9 5V8H16Z" fill="currentColor" />
          <Path d="M7 5L7 19H4L4 5L7 5Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

