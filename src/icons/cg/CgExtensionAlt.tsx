

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgExtensionAlt = (props: IconProps) => {

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
          <Path d="M5 5V19H13V13H19V5H5ZM11 7H7V11H11V7ZM11 13H7V17H11V13ZM13 11H17V7H13V11Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

