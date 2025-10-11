

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgSpaceBetweenV = (props: IconProps) => {

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
          <Path d="M5 5V9H19V5H17V7H7V5H5Z" fill="currentColor" />
          <Path d="M5 19V15H19V19H17V17H7V19H5Z" fill="currentColor" />
          <Path d="M7 11H17V13H7V11Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

