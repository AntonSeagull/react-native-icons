

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiArrowLeft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M16 8.972h-12.793l6.146 6.146-0.707 0.707-7.353-7.353 7.354-7.354 0.707 0.707-6.147 6.147h12.793v1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

