

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgStyle = (props: IconProps) => {

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
          <Path d="M13 21V13H21V21H13ZM15 15H19L19 19H15V15Z" fill="currentColor" />
          <Path d="M3 11L3 3L11 3V11H3ZM5 5L9 5V9L5 9L5 5Z" fill="currentColor" />
          <Path d="M18 6V12H16V8L12 8V6L18 6Z" fill="currentColor" />
          <Path d="M12 18H6L6 12H8L8 16H12V18Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

