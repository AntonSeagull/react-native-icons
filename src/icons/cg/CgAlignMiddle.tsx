

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgAlignMiddle = (props: IconProps) => {

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
          <Path d="M13 9H17V15H13V9Z" fill="currentColor" />
          <Path d="M7 6H11V18H7V6Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

