

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgStudio = (props: IconProps) => {

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
          <Path d="M17 13H13V17H17V13Z" fill="currentColor" />
          <Path d="M3 3H21V21H3V3ZM5 5H19V19H5V5Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

