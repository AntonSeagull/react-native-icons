

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBaselineDensitySmall = (props: IconProps) => {

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
          <Path d="M4 3h16" />
          <Path d="M4 9h16" />
          <Path d="M4 15h16" />
          <Path d="M4 21h16" />
        </G>
      </Svg>
    );
  }

