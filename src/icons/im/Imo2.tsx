

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imo2 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M11.904 16c1.777-3.219 2.076-8.13-4.904-7.966v3.966l-6-6 6-6v3.881c8.359-0.218 9.29 7.378 4.904 12.119z" fill="#000000" />
        </G>
      </Svg>
    );
  }

