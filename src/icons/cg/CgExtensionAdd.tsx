

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgExtensionAdd = (props: IconProps) => {

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
          <Path d="M16 4H18V6H20V8H18V10H16V8H14V6H16V4Z" fill="currentColor" />
          <Path d="M12 12V6H4V20H18V12H12ZM6 8H10V12H6V8ZM10 14V18H6V14H10ZM16 14V18H12V14H16Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

