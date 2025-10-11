

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAlignLeft2 = (props: IconProps) => {

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
          <Path d="M4 4v16" />
          <Path d="M8 6h12" />
          <Path d="M8 12h6" />
          <Path d="M8 18h10" />
        </G>
      </Svg>
    );
  }

