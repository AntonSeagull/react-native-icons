

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandFlutter = (props: IconProps) => {

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
          <Path d="M7 14l-3 -3l8 -8h6z" />
          <Path d="M14 21l-5 -5l5 -5h5l-5 5l5 5z" />
        </G>
      </Svg>
    );
  }

