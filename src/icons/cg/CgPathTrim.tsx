

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPathTrim = (props: IconProps) => {

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
          <Path d="M5 5H15V8H8V15H5V5Z" fill="currentColor" />
          <Path d="M19 9H9V19H19V9Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

