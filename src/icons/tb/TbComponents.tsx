

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbComponents = (props: IconProps) => {

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
          <Path d="M3 12l3 3l3 -3l-3 -3z" />
          <Path d="M15 12l3 3l3 -3l-3 -3z" />
          <Path d="M9 6l3 3l3 -3l-3 -3z" />
          <Path d="M9 18l3 3l3 -3l-3 -3z" />
        </G>
      </Svg>
    );
  }

