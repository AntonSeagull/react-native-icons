

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiMitsubishi = (props: IconProps) => {

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
          <Path d="M8 22.38H0l4-6.92h8zm8 0h8l-4-6.92h-8zm0-13.84l-4-6.92-4 6.92 4 6.92Z" />
        </G>
      </Svg>
    );
  }

