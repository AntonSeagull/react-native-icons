

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutSliderAlt = (props: IconProps) => {

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
          <Path d="M2 14h13v-11h-13v11zM3 4h11v9h-11v-9z" fill="#000000" />
          <Path d="M16 4.531h1v7.938h-1v-7.938z" fill="#000000" />
          <Path d="M0 4.531h1v7.938h-1v-7.938z" fill="#000000" />
        </G>
      </Svg>
    );
  }

