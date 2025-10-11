

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgExtensionRemove = (props: IconProps) => {

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
          <Path d="M12 11V5H4V19H18V11H12ZM6 7H10V11H6V7ZM10 13V17H6V13H10ZM16 13V17H12V13H16Z" fill="currentColor" />
          <Path d="M20 7H14V9H20V7Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

