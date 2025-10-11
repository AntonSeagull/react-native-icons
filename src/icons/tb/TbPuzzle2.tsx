

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPuzzle2 = (props: IconProps) => {

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
          <Path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <Path d="M12 4v2.5a.5 .5 0 0 1 -.5 .5a1.5 1.5 0 0 0 0 3a.5 .5 0 0 1 .5 .5v1.5" />
          <Path d="M12 12v1.5a.5 .5 0 0 0 .5 .5a1.5 1.5 0 0 1 0 3a.5 .5 0 0 0 -.5 .5v2.5" />
          <Path d="M20 12h-2.5a.5 .5 0 0 1 -.5 -.5a1.5 1.5 0 0 0 -3 0a.5 .5 0 0 1 -.5 .5h-1.5" />
          <Path d="M12 12h-1.5a.5 .5 0 0 0 -.5 .5a1.5 1.5 0 0 1 -3 0a.5 .5 0 0 0 -.5 -.5h-2.5" />
        </G>
      </Svg>
    );
  }

