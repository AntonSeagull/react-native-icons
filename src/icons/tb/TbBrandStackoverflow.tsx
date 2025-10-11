

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandStackoverflow = (props: IconProps) => {

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
          <Path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1" />
          <Path d="M8 16h8" />
          <Path d="M8.322 12.582l7.956 .836" />
          <Path d="M8.787 9.168l7.826 1.664" />
          <Path d="M10.096 5.764l7.608 2.472" />
        </G>
      </Svg>
    );
  }

