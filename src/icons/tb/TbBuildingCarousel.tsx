

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBuildingCarousel = (props: IconProps) => {

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
          <Path d="M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
          <Path d="M5 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M19 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M5 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M19 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M8 22l4 -10l4 10" />
        </G>
      </Svg>
    );
  }

