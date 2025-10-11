

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const AiOutlineHarmonyOS = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 1024 1024"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M377.5 0C585.987 0 755 169.013 755 377.5S585.987 755 377.5 755 0 585.987 0 377.5 169.013 0 377.5 0m0 64C204.359 64 64 204.359 64 377.5S204.359 691 377.5 691 691 550.641 691 377.5 550.641 64 377.5 64" />
          <Path d="M611 824 611 896 144 896 144 824z" />
        </G>
      </Svg>
    );
  }

