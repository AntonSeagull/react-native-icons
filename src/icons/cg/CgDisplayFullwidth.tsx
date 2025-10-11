

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgDisplayFullwidth = (props: IconProps) => {

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
          <Path d="M2 5H22V3H2V5Z" fill="currentColor" />
          <Path d="M2 21H22V19H2V21Z" fill="currentColor" />
          <Path d="M2 7V17H22V7H2ZM4 9H20V15H4V9Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

