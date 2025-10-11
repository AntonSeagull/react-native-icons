

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSquareToggleHorizontal = (props: IconProps) => {

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
          <Path d="M22 12h-20" />
          <Path d="M4 14v-8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
          <Path d="M18 20a2 2 0 0 0 2 -2" />
          <Path d="M4 18a2 2 0 0 0 2 2" />
          <Path d="M14 20l-4 0" />
        </G>
      </Svg>
    );
  }

