

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBuildingStadium = (props: IconProps) => {

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
          <Path d="M12 12m-8 0a8 2 0 1 0 16 0a8 2 0 1 0 -16 0" />
          <Path d="M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435 -.225 6 -1.07 6 -2v-7" />
          <Path d="M15 6h4v-3h-4v7" />
          <Path d="M7 6h4v-3h-4v7" />
        </G>
      </Svg>
    );
  }

