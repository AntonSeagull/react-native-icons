

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArcheryArrow = (props: IconProps) => {

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
          <Path d="M14 7v3h3l3 -3h-3v-3z" />
          <Path d="M14 10l-9 9" />
          <Path d="M5 15v4h4" />
        </G>
      </Svg>
    );
  }

