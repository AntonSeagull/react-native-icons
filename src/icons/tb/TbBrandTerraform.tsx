

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandTerraform = (props: IconProps) => {

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
          <Path d="M15 15.5l-11.476 -6.216a1 1 0 0 1 -.524 -.88v-4.054a1.35 1.35 0 0 1 2.03 -1.166l9.97 5.816v10.65a1.35 1.35 0 0 1 -2.03 1.166l-3.474 -2.027a1 1 0 0 1 -.496 -.863v-11.926" />
          <Path d="M15 15.5l5.504 -3.21a1 1 0 0 0 .496 -.864v-3.576a1.35 1.35 0 0 0 -2.03 -1.166l-3.97 2.316" />
        </G>
      </Svg>
    );
  }

