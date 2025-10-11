

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTallymark4 = (props: IconProps) => {

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
          <Path d="M6 5l0 14" />
          <Path d="M10 5l0 14" />
          <Path d="M14 5l0 14" />
          <Path d="M18 5l0 14" />
        </G>
      </Svg>
    );
  }

