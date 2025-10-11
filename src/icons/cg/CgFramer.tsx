

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgFramer = (props: IconProps) => {

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
          <Path d="M12 21L12 9L6 9L6 15L12 21Z" fill="currentColor" />
          <Path d="M18 9V3H6L12 9H6V15H18L12 9H18Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

