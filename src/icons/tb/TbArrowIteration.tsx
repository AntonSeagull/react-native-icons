

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowIteration = (props: IconProps) => {

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
          <Path d="M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5" />
          <Path d="M3 16h18" />
          <Path d="M18 13l3 3l-3 3" />
        </G>
      </Svg>
    );
  }

