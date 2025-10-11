

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrHpe = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M2 6H46V18H2V6ZM5 9H43V15H5V9Z" fill="#00C781" />
        </G>
      </Svg>
    );
  }

